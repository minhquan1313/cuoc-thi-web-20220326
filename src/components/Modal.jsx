import { createContext, memo, useEffect, useMemo, useRef, useState } from "react";
import classNames from "../utils/classNames";

const ModalContext = createContext(null);

const transitionTimer = 400;

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const timeOutRef = useRef(null);
  const [jsx, setJsx] = useState(null);
  const animateThis = useRef(null);
  const mouseDownEle = useRef(null);

  const modal = useMemo(
    () => ({
      show(jsx_) {
        setShow((prevShow) => {
          // if (!prevShow) {
          clearTimeout(timeOutRef.current);
          setJsx((p) => jsx_);

          return true;
          // }
          // return prevShow;
        });
      },
      done() {
        setShow(() => false);

        timeOutRef.current = setTimeout(() => {
          setJsx(<></>);
        }, transitionTimer);
      },
    }),
    []
  );
  useEffect(() => {
    if (show) {
      animateThis.current.style.transform = "";
    } else {
      animateThis.current.style.transform = "translateY(100vh)";
    }
  });

  return (
    <ModalContext.Provider value={modal}>
      <div
        className={classNames(
          "fixed inset-0 z-50 bg-neutral-900/40 transition-opacity",
          show ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        id="modal"
        style={{ transitionDuration: `${transitionTimer}ms` }}
        onMouseDown={(e) => {
          mouseDownEle.current = e.target;
        }}
        onMouseUp={(e) => {
          if (e.target.id === "modal" && e.target === mouseDownEle.current) modal.done();
        }}
        role="presentation">
        <div
          ref={animateThis}
          className="pointer-events-none flex h-full flex-col items-center justify-center transition-transform"
          style={{ transitionDuration: `${transitionTimer}ms` }}>
          <div className="pointer-events-auto">{jsx}</div>
        </div>
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export default memo(Modal);
export { ModalContext };
