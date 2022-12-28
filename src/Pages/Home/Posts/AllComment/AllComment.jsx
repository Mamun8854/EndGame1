import React from "react";

const AllComment = ({ d }) => {
  const { userPhoto, userName, comment } = d;
  return (
    <section>
      <div className="flex space-x-4">
        <img
          alt=""
          src={userPhoto}
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
            <span className="text-xs dark:text-gray-400 mr-2">{comment}</span>
          </small>
        </div>
      </div>
    </section>
  );
};

export default AllComment;
