import moment from "moment";
import React from "react";
import {
  HiEye,
  HiOutlineBookmark,
  HiOutlineShare,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    others_info,
    category_id,
    rating,
    total_view,
    title,
    author,
    image_url,
    details,
  } = news;
  const { name, published_date, img } = author;
  const { number, badge } = rating;
  return (
    <div className="card w-full shadow-xl ">
      <div className="flex justify-between items-center p-4 bg-slate-200 rounded-t-xl">
        <div className="flex justify-between items-center gap-2 rounded-t-lg">
          <div>
            <img src={img} className="w-8 h-8 rounded-full" alt="" />
          </div>
          <div>
            <p className="text-xl font-medium">{name}</p>
            <p>{moment(published_date).format("YYYY-MM-DD")}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <HiOutlineBookmark />
          <HiOutlineShare />
        </div>
      </div>
      <div className="card-body p-5">
        <h2 className="card-title my-2">{title}</h2>
        <figure>
          <img className="h-64 w-full object-cover " src={image_url} alt={title} />
        </figure>
        <p>
          {details > 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 220)}....
              <Link className="btn-link" to={`/news/${_id}`}>
                Read full
              </Link>
            </>
          )}
        </p>
      </div>
      <div className="flex justify-between bg-slate-200 rounded-b-xl p-4">
        <div className=" flex gap-2  ">
          <Rating
            className="text-2xl"
            readonly
            placeholderRating={number}
            emptySymbol={<HiOutlineStar className="text-yellow-600  " />}
            placeholderSymbol={<HiStar className="text-yellow-600" />}
            fullSymbol={<HiStar />}
          />
          <span>{number}</span>
        </div>
        <div>
          <HiEye className="inline" /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
