import { forwardRef, memo } from "react";
import classNames from "../utils/classNames";

const style = [
  "bg-primary-500 text-neutral-100 hover:bg-primary-600 transition",
  "bg-neutral-100 text-orange-500 hover:bg-neutral-200 transition",
  "bg-orange-500 text-neutral-100 hover:bg-orange-600 transition",
];

const Button = ({ children, className, isNoRound, st, ...rest }, ref) => {
  return (
    <button ref={ref} className={classNames("appearance-none px-6 py-2", isNoRound ?? "rounded-full", style[st] ?? style[0], className)} {...rest}>
      {children}
    </button>
  );
};

export default memo(forwardRef(Button));
