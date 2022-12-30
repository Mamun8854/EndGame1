import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const PostCard = ({ post }) => {
  const [count, setCount] = useState(false);

  const {
    description,
    image,
    userEmail,
    userImage,
    userName,
    _id,
    date,
    time,
    currentReact,
  } = post;

  console.log(currentReact);
  return (
    <section className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-100 dark:text-gray-900 w-[512px] h-[600px]">
      <div>
        <div className="flex space-x-4">
          <img
            alt=""
            src={userImage}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="/"
              className="text-sm font-semibold"
            >
              {userName}
            </a>
            <small>
              <span className="text-xs dark:text-gray-400 mr-2">{date}</span>
              <span className="text-xs dark:text-gray-400">{time}</span>
            </small>
          </div>
        </div>
        <p className="text-sm dark:text-gray-400 pt-5">{description}</p>
      </div>
      <div>
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <Link to={`/post/${_id}`}>
            <button className="btn btn-outline btn-sm hover:bg-blue-400 hover:text-black hover:border-none">
              Details
            </button>
          </Link>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-400">
          <button
            onClick={() => setCount(!count)}
            type="button"
            className="flex items-center p-1 space-x-1.5"
          >
            <FcLike></FcLike>
            <span>{count ? <>{currentReact + 1}</> : "0"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
