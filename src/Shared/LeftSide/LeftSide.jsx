import React from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <section className="fixed">
      <div className="flex flex-col font-medium gap-3 ">
        <Link to="/media" className="hover:text-blue-600">
          Media
        </Link>
        <Link to="/" className="hover:text-blue-600">
          Message
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link to="/addPost" className="hover:text-blue-600">
          Add New Post
        </Link>
      </div>
    </section>
  );
};

export default LeftSide;
