import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const NewDetailsCard = () => {
  const news = useLoaderData(); 
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <>
      {news && (
        <div className="card card-compact w-full bg-base-100 shadow-md my-2 p-4 rounded-none">
          <figure>
            <img src={news.image_url} alt={news.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{news.title}</h2>
            <p className="text-justify text-base">
              {showFullDetails ? (
                <>{news?.details}</>
              ) : (
                <>
                  {news?.details.slice(0, 1000)}....
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
              <Link to={`/category/${news.category_id}`}>
                <button className="btn btn-primary">
                  All news in this category
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewDetailsCard;
