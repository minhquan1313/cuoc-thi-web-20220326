import { memo, useMemo } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  const data = useMemo(
    () => [
      {
        l: "Về 7Team",
        c: [
          { l: "Về chúng tôi", href: "/about" },
          { l: "Tin tức", href: "" },
        ],
      },
      {
        l: "Công ty",
        c: [
          { l: "Khả năng tiếp cận", href: "" },
          { l: "Cộng sự", href: "" },
          { l: "FQA", href: "" },
          { l: "Blog", href: "" },
        ],
      },
      {
        l: "Hỗ trợ",
        c: [
          { l: "Tài khoản", href: "" },
          { l: "Trung tâm hỗ trợ", href: "" },
          { l: "Phản hồi", href: "" },
        ],
      },
    ],
    []
  );

  return (
    <footer className="bg-neutral-100 py-9">
      <Container className={"flex flex-col gap-6 md:flex-row"}>
        <div className="flex-1">
          <div className="w-fit">
            <Link to={"/"} className="flex items-center">
              <div className="relative flex aspect-square h-16 items-center justify-center rounded-full bg-gray-100">
                <FcBriefcase size={"3rem"} className="absolute" />
              </div>
              <span className="ml-2 text-lg font-medium text-neutral-800">7Team</span>
            </Link>
          </div>
          <p className="my-3 text-sm text-neutral-400">
            Chúng tôi cung cấp cho bạn các chuyến du lịch trọn gói với giá cả phải chăng nhất trên thị trường.
          </p>
          <div className="ml-2 flex gap-3">
            {[FiFacebook, FiTwitter, FiInstagram].map((R, i) => (
              <button
                key={i}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square h-11 items-center justify-center rounded-full bg-gray-100 text-neutral-500 transition-all hover:bg-primary-500 hover:text-neutral-100">
                <R size={"1.8rem"} />
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.map((r) => (
            <ul key={r.l} className="">
              <li className="mb-3 whitespace-nowrap text-base text-neutral-400 first:mb-6 first:font-semibold first:text-neutral-800">{r.l}</li>
              {r.c.map((rc) => (
                <li
                  key={rc.l}
                  className="mb-3 cursor-pointer whitespace-nowrap text-sm text-neutral-400 first:mb-6 first:font-semibold first:text-neutral-800">
                  {rc.l}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);
