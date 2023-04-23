import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import moment from "moment";

const EditorsInsides = () => {
  const [todaysPick, setTodaysPick] = useState([]);
  useEffect(() => {
    const loadTodaysPick = async () => {
      try {
        const req = await fetch("http://localhost:3000/todays-pick");
        const res = await req.json();
        setTodaysPick(res);
      } catch (error) {
        console.log(error);
      }
    };
    loadTodaysPick();
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold mt-8  py-5"> Todays Pick </h2>
      <div className="relative w-full h-96 md:h-72 lg:h-80 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className=" absolute top-0 left-0 w-full h-full"
        >
          {todaysPick.map(
            (
              {
                _id,
                others_info,
                category_id,
                rating,
                total_view,
                title,
                author,
                image_url,
                details,
              },
              index
            ) => (
              <SwiperSlide className="h-full" key={index}>
                <div className="card w-full bg-slate-200 shadow-xl max-h-full">
                  <figure>
                    <img src={image_url} />
                  </figure>
                  <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-xl">{title.slice(0, 40)}...</h2>
                    <p>
                      {moment(author?.published_date).format("DD-MMMM-YYYY")}
                    </p>

                    <Link to={`/news/${_id}`}>
                      <button className="btn btn-sm  btn-primary w-full">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </>
  );
};

export default EditorsInsides;
