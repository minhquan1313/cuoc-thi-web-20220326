import { memo } from "react";
import Container from "./Container";
import { FcCheckmark } from "react-icons/fc";
import { FiDroplet, FiWifi, FiSearch } from "react-icons/fi";
import { SiShopify } from "react-icons/si";
import { RiHotelBedLine } from "react-icons/ri";

import img1 from "../resources/imgs/a/01c84ab00a09c5579c18.jpg";
import img2 from "../resources/imgs/a/d75f45ebaf52600c3943.jpg";
import img3 from "../resources/imgs/a/132ec05380ea4fb416fb.jpg";
import img4 from "../resources/imgs/a/Dalat-Beautiful-Places-in-Vietnam.jpg";
import img5 from "../resources/imgs/a/hoi-an-vietnam-shutterstock_3974.jpg";

const FindJouney = () => {
  console.log(img1);
  return (
    <>
      <div className="relative z-10">
        <Container className="-translate-y-24 xl:px-24">
          <div className="flex flex-col gap-9 rounded-3xl bg-neutral-50 p-6 shadow-lg lg:flex-row">
            <div className="flex-1 space-y-6">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium">Facilities</h1>
                <button className="px-3 py-1 text-sm text-primary-500">See more</button>
              </div>
              <ul className="grid grid-cols-4 gap-6">
                {[
                  { l: "Swimming", Ico: FiDroplet },
                  { l: "Wifi", Ico: FiWifi },
                  { l: "Restaurant", Ico: SiShopify },
                  { l: "Bedroom", Ico: RiHotelBedLine },
                ].map(({ l, Ico }) => (
                  <li key={l} className="flex flex-col items-center gap-3">
                    <div className="flex aspect-square w-12 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
                      <Ico size={"1.5rem"} />
                    </div>
                    <p className="text-sm text-neutral-600">{l}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h1 className="text-xl font-medium">Hotels for you</h1>
              <h1 className="text-sm text-neutral-500">7 days, 6 nights</h1>
              <div className="flex items-center gap-6 rounded-md border border-neutral-200 p-2">
                <div className="flex aspect-square w-12 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
                  <FcCheckmark size={"2rem"} />
                </div>
                <span className="text-neutral-600">USD $250.00</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium">Find your journey</h1>
                <button className="px-3 py-1 text-sm text-primary-500">
                  <FiSearch size={"1.5rem"} />
                </button>
              </div>
              <h1 className="text-sm text-neutral-500">Add guest</h1>
              <ul className="grid grid-cols-5 gap-6">
                {[img1, img2, img3, img4, img5].map((src, i) => (
                  <li key={i} className="flex flex-col items-start gap-3">
                    <div className="flex aspect-square w-16 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-50">
                      <img src={src} alt="alt" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-sm text-neutral-600"></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default memo(FindJouney);
