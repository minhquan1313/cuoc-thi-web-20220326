import { createContext, memo, useState } from "react";
import storage from "../utils/storage";

const UserContext = createContext();

const User = ({ children }) => {
  // user | users
  // userName | id ------ userName | password | id
  const [user, setUser] = useState(storage.read("user"));
  console.log({ user });

  const userSignInSet = ({ userName, password }) => {
    const users = storage.read("users");
    const _ = users.find((r) => r.userName === userName && r.password === password);
    if (_) {
      setUser(_);
      storage.write("user", _);
      return { c: true };
    }
    return { c: false, m: "Tài khoản hoặc mật khẩu sai" };
  };
  const userSignUpSet = ({ userName, password }) => {
    const users = storage.read("users") ?? (storage.write("users", []) && []);
    const userIds = storage.read("userIds") ?? (storage.write("userIds", 1) && 1);

    console.log({ users });
    const _ = users && users.find((r) => r.userName === userName);
    if (_) {
      return { c: false, m: "Người dùng đã tồn tại" };
    }

    const newUser = { userName, password, id: userIds + 1 };
    // setUser(newUser);

    users.push(newUser);
    storage.write("users", users);
    storage.write("userIds", userIds + 1);

    return { c: true };
  };

  const signOut = () => {
    setUser(null);
    storage.write("user", null);
  };
  return <UserContext.Provider value={{ user: user, userSignInSet, userSignUpSet, signOut }}>{children}</UserContext.Provider>;
};

export default memo(User);
export { UserContext };
