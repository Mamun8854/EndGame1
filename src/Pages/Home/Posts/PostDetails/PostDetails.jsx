import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const details = useLoaderData();
  const { description, image, userEmail, userImage, userName, _id } = details;
  return (
    <section className="mt-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-outline btn-sm">
                Back to home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
