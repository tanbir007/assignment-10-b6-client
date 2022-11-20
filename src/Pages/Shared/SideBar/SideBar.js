import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://tech-learner-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-decoration-underline text-muted">Category</h2>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/courses/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
