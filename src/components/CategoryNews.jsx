import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const categoryNews = useLoaderData();

  return (
    <div className="grid grid-cols-1 gap-5">
      {categoryNews.length > 0 ? (
        categoryNews.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))
      ) : (
        <div className="flex justify-center items-center h-96">
          <h2>NO news found</h2>
        </div>
      )}
    </div>
  );
};

export default CategoryNews;
