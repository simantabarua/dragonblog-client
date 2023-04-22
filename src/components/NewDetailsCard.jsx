import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const NewDetailsCard = () => {
  const news = useLoaderData();
  const [showFullDetails, setShowFullDetails] = useState(false);
  const {
    category_id,
    title,
    image_url,
    details,
  } = news;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl my-2 p-4 rounded-none">
      <figure>
        <img src={image_url} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify text-base">
          {showFullDetails ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 1000)}....
              <button
                className="btn btn-link"
                onClick={() => setShowFullDetails(true)}
              >
                Read more
              </button>
            </>
          )}
        </p>
        <div className="card-actions justify-start">
          <Link to={`/category/${category_id}`}>
            <button className="btn btn-primary">
              All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewDetailsCard;
