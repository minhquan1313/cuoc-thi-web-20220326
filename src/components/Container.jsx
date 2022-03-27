import { memo } from "react";
import classNames from "../utils/classNames";

const Container = ({ children, className }) => {
  return <div className={classNames("container mx-auto", className)}>{children}</div>;
};

export default memo(Container);
