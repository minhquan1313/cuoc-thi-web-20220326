import { memo } from "react";
import Banner from "../components/Banner";
import BestRecommend from "../components/BestRecommend";
import FindJouney from "../components/FindJouney";
import Newsletter from "../components/Newsletter";

const index = ({ children }) => {
  return (
    <div>
      <Banner />
      <FindJouney />
      <BestRecommend />
      <Newsletter />
    </div>
  );
};

export default memo(index);
