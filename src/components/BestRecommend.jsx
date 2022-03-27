import { memo } from "react";
import classNames from "../utils/classNames";
import Button from "./Button";
import Container from "./Container";
import LocationCard from "./LocationCard";

const BestRecommend = () => {
  return (
    <div className="px-3 pb-12 md:px-0">
      <Container className={"grid grid-cols-1 gap-16 lg:grid-cols-2"}>
        <div className="">
          <ul className="ml-auto flex flex-row-reverse gap-9">
            {["", ""].map((r, i) => (
              <li key={i} className={classNames("w-72", i % 2 && "translate-y-9")}>
                <LocationCard />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-medium tracking-wider text-primary-500">Best recommended destination</p>
          <p className="text-5xl font-semibold text-neutral-800" style={{ lineHeight: 1.5 }}>
            This week's best tourist spot that is always frequented
          </p>
          <p className="w-96 max-w-full text-sm text-neutral-400">
            Recommended tourist attractions that are frequently visited and get the best ratings by world tourists
          </p>
          <div className="">
            <ul className="flex justify-start gap-6">
              <li className="">
                <p className="text-2xl font-medium">125+</p>
                <p className="text-sm text-neutral-400">Hollday package</p>
              </li>
              <li className="">
                <p className="text-2xl font-medium">125+</p>
                <p className="text-sm text-neutral-400">Luxury hotel</p>
              </li>
              <li className="">
                <p className="text-2xl font-medium">125+</p>
                <p className="text-sm text-neutral-400">Satisfled Traveler</p>
              </li>
            </ul>
          </div>
          <Button st={0}>Find your tour</Button>
        </div>
      </Container>
    </div>
  );
};

export default memo(BestRecommend);
