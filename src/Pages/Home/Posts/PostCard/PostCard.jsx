import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const PostCard = ({ post }) => {
  console.log(post);
  const { description, image, userEmail, userImage, userName, _id } = post;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-100 dark:text-gray-900">
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
          <span className="text-xs dark:text-gray-400">{userEmail}</span>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded"
        />
        <h2 className="mb-1 text-xl font-semibold">
          Nam cu platonem posidonium sanctus debitis te
        </h2>
        <p className="text-sm dark:text-gray-400">{description}</p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className="p-2 text-center"
          >
            <Link to={`/post/${_id}`}>
              <button className="btn btn-outline btn-sm hover:bg-blue-400 hover:text-black hover:border-none">
                Details
              </button>
            </Link>
          </button>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-400">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <FcLike></FcLike>
            <span>283</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;