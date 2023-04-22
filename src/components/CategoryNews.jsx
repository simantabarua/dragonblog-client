import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const categoryNews = useLoaderData();
  return (
    <div className="grid grid-cols-1 gap-5" >
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default CategoryNews;
