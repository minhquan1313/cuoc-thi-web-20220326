import { memo } from "react";
import classNames from "../utils/classNames";
import Container from "./Container";
import bannerSvg from "../resources/svg/undraw_journey_lwlj.svg";

const Banner = () => {
  return (
    <div className="h-200 bg-primary-50 bg-bottom">
      <Container className="relative z-10 h-full">
        <img src={bannerSvg} alt="" className="absolute top-0 bottom-0 right-0 -z-10 hidden h-200 scale-75 md:block" />
        <div className="flex h-full flex-col items-start justify-center gap-6 md:w-1/2">
          <p className="text-lg font-medium tracking-wider text-primary-500 md:text-xl">Nề tảng đáng tin cậy cho du lịch</p>
          <p className="text-3xl font-semibold text-neutral-800 md:text-5xl" style={{ lineHeight: 1.5 }}>
            Bắt đầu khám phá kỳ nghĩ mơ ước của bạn
          </p>
          <p className="w-96 max-w-full text-sm text-neutral-400">Chúng tôi luôn làm khác hàng hài lòng với những địa điểm du lịch phù hợp nhất</p>
          <div className="flex items-center">
            <ul className="flex w-fit">
              {[1, 2, 3, 4].map((r, i) => (
                <li key={i} className={classNames("relative aspect-square w-11 overflow-hidden rounded-full")} style={{ left: `-${i * 1}rem` }}>
                  <img src={`https://i.pravatar.cc/?img=${r}`} alt="" />
                </li>
              ))}
            </ul>
            <p className="relative -left-9 text-primary-500 xl:text-neutral-700">Hơn 5000+ người tham gia cùng chúng tôi</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(Banner);
