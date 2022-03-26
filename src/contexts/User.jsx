import { createContext, memo } from "react";

const UserContext = createContext();

const User = ({ children }) => {
  return <UserContext.Provider value={0}>children</UserContext.Provider>;
};

export default memo(User);
