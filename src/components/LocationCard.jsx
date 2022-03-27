import { memo } from "react";
import img1 from "../resources/imgs/a/132ec05380ea4fb416fb.jpg";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import Button from "./Button";

const LocationCard = ({ src, name, price, day, rating }) => {
  return (
    <div className="h-fit w-full">
      <div className="w-full">
        <img src={img1} alt="hinh" className="w-full rounded-xl object-cover shadow-md" style={{ aspectRatio: "4/5" }} />
      </div>
      <div className="mx-auto -my-3 flex w-11/12 -translate-y-12 flex-col gap-2 rounded-xl bg-primary-500 p-3 text-neutral-100">
        <p className="text-sm font-medium">Cartoon, Russia</p>
        <div className="relative w-fit">
          <div className="flex">
            {["", "", "", "", ""].map((r, i) => (
              <HiOutlineStar key={i} size={"1rem"}></HiOutlineStar>
            ))}
          </div>
          <div
            className="absolute inset-0 z-10 flex overflow-hidden"
            //   style={{ width: `${(5 / rating) * 100}%` }}
            style={{ width: `50%` }}>
            {["", "", "", "", ""].map((r, i) => (
              <HiStar key={i} size={"1rem"} className="flex-shrink-0"></HiStar>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <p className="flex flex-1 items-center text-xs">
            From<span className="ml-3 text-lg font-medium">$680</span>
          </p>
          <Button st={1} className="text-sm">
            Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(LocationCard);
