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
    <div className="p-5 font-normal">
      <h2 className="text-xl">All Categories</h2>
      <div>
        {categories.map((category, index) => (
          <p key={index}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
