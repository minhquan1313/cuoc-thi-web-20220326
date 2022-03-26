import { memo } from "react";

const Container = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default memo(Container);
