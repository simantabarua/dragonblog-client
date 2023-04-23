import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="p-2 text-xl flex justify-center items-center bg-stone-100">
      <span className="bg-red-500 text-white p-3 rounded-md">Latest</span>{" "}
      <Marquee speed={70} pauseOnHover={true}>
        <span className="text-red-800">
          Match Highlights: Germany vs Spain — as it happened ! Match <span className="text-gray-600 font-bold"> || </span>
          Highlights: Germany vs Spain as Shaquille O’Neal auctions a 1000 size 22 Reeboks for $999.32 each!...
        </span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
