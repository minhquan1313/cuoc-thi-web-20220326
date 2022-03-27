import { memo, useContext, useEffect, useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import classNames from "../../utils/classNames";
import Container from "../Container";
import { ModalContext } from "../Modal";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const Header = () => {
  const [height, setHeight] = useState("6rem");
  const { show } = useContext(ModalContext);
  const user = useContext(UserContext);
  console.log({ user });
  // show(<SignUp />);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setHeight("6rem");
        return;
      }
      setHeight("3rem");
    };

    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="relative z-40">
      <div
        className={classNames("fixed left-0 right-0 top-0 transition-all", height === "3rem" && "bg-neutral-50 shadow-lg")}
        style={{ height: height }}>
        <Container className={"flex h-full items-center"}>
          <div className="flex flex-1">
            <Link to={"/"} className="flex items-center">
              <div className="relative flex aspect-square h-11 items-center justify-center rounded-full bg-gray-50">
                <FcBriefcase size={"2rem"} className="absolute" />
              </div>
              <span className="ml-2 text-lg font-medium text-neutral-800">7Team</span>
            </Link>
          </div>
          <ul className="hidden items-center gap-3 md:flex">
            <li className={classNames(location.pathname === "/" ? "text-neutral-800" : "text-gray-500", "transition hover:text-neutral-800")}>
              <Link to={"/"}>Trang chủ</Link>
            </li>
            <li className={classNames(location.pathname === "/about" ? "text-neutral-800" : "text-gray-500", "transition hover:text-neutral-800")}>
              <Link to={"/about"}>Về chúng tôi</Link>
            </li>
            <li className={classNames(location.pathname === "/xxxx" ? "text-neutral-800" : "text-gray-500", "transition hover:text-neutral-800")}>
              <Link to={"/"}>Liên hệ</Link>
            </li>
          </ul>
          <ul className="group relative flex flex-1 justify-end">
            <div
              className={classNames(
                "flex aspect-square h-11 items-center justify-center rounded-full border border-neutral-300",
                user.user ? "bg-gray-800" : "bg-gray-50"
              )}>
              <FiUser size={"1.8rem"} className={classNames(user.user ? "text-neutral-100" : "text-neutral-700")} />
            </div>
            {user.user ? (
              <div className="pointer-events-none absolute top-full right-0 overflow-hidden rounded-lg bg-neutral-50 opacity-0 shadow-lg transition-all after:absolute after:bottom-full after:left-0 after:right-0 after:h-3 group-hover:pointer-events-auto group-hover:opacity-100">
                <ul className="divide-y">
                  <li
                    className="w-60 cursor-pointer px-6 py-2 text-neutral-500 transition-all hover:bg-primary-400 hover:text-neutral-50"
                    onClick={() => user.signOut()}>
                    Đăng xuất
                  </li>
                </ul>
              </div>
            ) : (
              <div className="pointer-events-none absolute top-full right-0 overflow-hidden rounded-lg bg-neutral-50 opacity-0 shadow-lg transition-all after:absolute after:bottom-full after:left-0 after:right-0 after:h-3 group-hover:pointer-events-auto group-hover:opacity-100">
                <ul className="divide-y">
                  <li
                    className="w-60 cursor-pointer px-6 py-2 text-neutral-500 transition-all hover:bg-primary-400 hover:text-neutral-50"
                    onClick={() => show(<SignUp />)}>
                    Đăng Ký
                  </li>
                  <li
                    className="w-60 cursor-pointer px-6 py-2 text-neutral-500 transition-all hover:bg-primary-400 hover:text-neutral-50"
                    onClick={() => show(<SignIn />)}>
                    Đăng Nhập
                  </li>
                </ul>
              </div>
            )}
            {/* <li className="cursor-pointer px-5 py-2 text-neutral-800">Login</li>
            <Button st={0}>SignUp</Button> */}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default memo(Header);
