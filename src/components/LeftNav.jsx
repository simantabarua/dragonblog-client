import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const LoadCategories = async () => {
      try {
        const req = await fetch("http://localhost:3000/categories");
        const res = await req.json();
        setCategories(res);
      } catch (error) {}
    };

    LoadCategories();
  }, []);

  return (
    <div className=" font-normal">
      <h2 className="text-xl my-2">All Categories</h2>
      <div className="flex md:flex-col gap-2 flex-wrap">
        {categories.map((category, index) => (
          <p className="rounded-lg p-1 ring-2 md:ring-0" key={index}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
