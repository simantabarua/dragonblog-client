import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import Rating from "react-rating";

const Comment = () => {
  return (
    <div className="card p-5 shadow-lg ">
      <div className="pr-5">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Post your comment "
        ></textarea>
          </div>
          <div>
           <Rating
            className="text-2xl"
            emptySymbol={<HiOutlineStar className="text-orange-400  " />}
            placeholderSymbol={<HiStar className="text-orange-400" />}
            fullSymbol={<HiStar className="text-orange-400" />}
          />
          </div>
      <div>
        <button className="btn btn-primary mt-2">Post</button>
      </div>
    </div>
  );
};

export default Comment;
