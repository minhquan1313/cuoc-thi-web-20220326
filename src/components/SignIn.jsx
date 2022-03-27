import { memo, useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import emailCheck from "../utils/emailCheck";
import Button from "./Button";
import { ModalContext } from "./Modal";
import SignUp from "./SignUp";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { show, done } = useContext(ModalContext);
  const user = useContext(UserContext);

  return (
    <div className="w-96 rounded-xl bg-neutral-50 px-6 py-6">
      <p className="mb-6 text-center text-xl">Đăng nhập</p>
      <input
        className=" my-1 w-full rounded-md bg-neutral-200 px-3 py-2 outline-none placeholder:text-sm"
        value={userName}
        placeholder="Tên người dùng"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="password"
        className=" my-1 w-full rounded-md bg-neutral-200 px-3 py-2 outline-none placeholder:text-sm"
        value={password}
        placeholder="Mật khẩu"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        isNoRound
        className="my-1 w-full rounded-md"
        onClick={() => {
          if (!emailCheck(userName.trim())) {
            setError("Email không hợp lệ");
            return;
          }

          if (password.trim() === "") {
            setError("Mật khẩu không được trống");
            return;
          }

          setError("");

          const r = user.userSignInSet({ userName, password });
          if (!r.c) {
            setError(r.m);
            return;
          }
          done();
          // ...
        }}>
        Đăng nhập
      </Button>
      <p className="">{error}</p>
      <p className="text-xs text-neutral-400">
        Chưa có tài khoản?{" "}
        <button
          className="text-primary-500"
          onClick={() => {
            done();
            show(<SignUp />);
          }}>
          Đăng ký
        </button>
      </p>
    </div>
  );
};

export default memo(SignIn);
