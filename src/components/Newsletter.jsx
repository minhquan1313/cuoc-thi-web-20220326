import { memo, useContext, useRef, useState } from "react";
import emailCheck from "../utils/emailCheck";
import Button from "./Button";
import Container from "./Container";
import { ModalContext } from "./Modal";

const Newsletter = () => {
  const [text, setText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [ready, setReady] = useState(false);
  const modal = useContext(ModalContext);
  console.log(modal);

  const submitBtb = useRef(null);

  return (
    <div className="bg-neutral-50 px-3 md:px-0">
      <Container className={"flex flex-col items-center py-12"}>
        <p className="text-center text-3xl font-bold text-neutral-700">Đăng ký nhận ưu đãi</p>
        <p className="mt-3 text-center text-sm text-neutral-400">Đăng ký ngay để không bỏ lở vé giảm giá cho chuyến du lịch kế tiếp của bạn</p>
        <div className="mx-auto mt-9 mb-3 flex w-full justify-center">
          <div className="flex w-96 max-w-full rounded-full shadow-md">
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);

                if (emailCheck(e.target.value)) {
                  setReady(true);
                  setErrorText("");
                } else {
                  setReady(false);
                  setErrorText("");
                }
              }}
              onKeyUp={(e) => {
                // console.log(e);
                if (e.code === "Enter") {
                  console.log(submitBtb.current);
                  submitBtb.current.click();
                }
              }}
              onBlur={() => {
                if (emailCheck(text)) {
                  setReady(true);
                  setErrorText("");
                  return;
                }

                setErrorText("Email không hợp lệ");
              }}
              className="flex-1 appearance-none rounded-l-full px-3 outline-none"
            />
            <Button
              ref={submitBtb}
              st={0}
              className={"rounded-r-full"}
              isNoRound
              onClick={() => {
                if (ready) {
                  modal.show(<div className="rounded-lg bg-primary-100 px-6 py-2">Đăng ký thành công</div>);
                }
              }}>
              Đăng ký
            </Button>
          </div>
        </div>
        {errorText && <p className="text-center text-sm text-red-500">{errorText}</p>}
      </Container>
    </div>
  );
};

export default memo(Newsletter);
