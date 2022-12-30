import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FcLike } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const HomePostCard = ({ post }) => {
  const { loading, user } = useContext(AuthContext);
  const { description, image, userImage, userName, _id, date, time } = post;
  const navigate = useNavigate();
  const { data, refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(
        `https://endgame1-server.vercel.app/comments/${_id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const commentValue = form.text.value;
    const data = {
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      comment: commentValue,
      postId: _id,
    };
    if (user) {
      // https://endgame1-server.vercel.app
      fetch("https://endgame1-server.vercel.app/comment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("comment added");
          refetch();
          form.reset();
          navigate(`/post/${_id}`);
        })
        .catch((error) => console.error(error.message));
    } else {
      toast.error("Please Login First, then add your comment .");
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-100 dark:text-gray-900">
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
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <FcLike></FcLike>
            <span>283</span>
          </button>
        </div>
      </div>

      {/* comment input section  */}
      <section>
        <div className="text-center w-2/5">
          <form onSubmit={handleComment} className="bg-gray-100 rounded">
            <div className="flex justify-between">
              <input className="px-2 mr-2" name="text" id="text"></input>
              <div>
                {user ? (
                  <button
                    type="submit"
                    className="btn btn-outline btn-sm bg-blue-600 text-white border-none hover:bg-blue-900 font-bold"
                  >
                    Comment
                  </button>
                ) : (
                  <a href="#my-modal-2" className="btn btn-outline font-bold">
                    Comment
                  </a>
                )}
              </div>
            </div>

            {/* Modal for non user , who want to comment  */}
            <div className="modal" id="my-modal-2">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  You want to drop your own comment??
                </h3>
                <p className="py-4">
                  Please Login First and then drop your comment.
                </p>
                <div className="modal-action">
                  <Link to="/login" className="btn btn-sm">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default HomePostCard;
