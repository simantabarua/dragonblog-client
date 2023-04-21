import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="p-2 text-xl flex justify-center items-center bg-stone-100">
      <span className="bg-red-500 text-white p-3 rounded-md">Latest</span>{" "}
      <Marquee speed={70} pauseOnHover={true}>
        <span>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
