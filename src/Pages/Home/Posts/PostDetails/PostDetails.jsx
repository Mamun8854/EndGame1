import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import AllComment from "../AllComment/AllComment";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  // const [data, setData] = useState();
  const details = useLoaderData();
  const { description, image, userEmail, userImage, userName, _id } = details;

  const { data, refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments/${_id}`);
      const data = await res.json();
      return data;
    },
  });
  // console.log(data);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/comments/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, [_id]);

  // add comment function
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
      fetch("http://localhost:5000/comment", {
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
        })
        .catch((error) => console.error(error.message));
    } else {
      toast.error("Please Login First, then add your comment .");
    }
  };

  return (
    <section>
      {/* post details section start */}
      <section className="mt-10 ">
        <div className="card lg:card-side bg-base-100 shadow-xl py-10 px-2">
          <figure>
            <img className="w-[450px] h-[245px]" src={image} alt="Album" />
          </figure>
          <div className="card-body">
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

        {/* comment section start */}

        <section>
          {data?.length > 0 ? (
            <>
              <h2 className="py-5 font-bold text-3xl text-center">Comments</h2>
              <section className="mt-50 bg-base-100 shadow-xl py-10 px-4 rounded grid lg:grid-cols-2 gap-4">
                {data?.map((d) => (
                  <AllComment key={d?._id} d={d}></AllComment>
                ))}
              </section>
            </>
          ) : (
            ""
          )}
        </section>

        {/* comment section end */}
      </section>
      {/* post details section end */}

      {/* comment input start */}
      <section>
        <h3 className="font-bold text-center text-4xl py-10">
          Drop Your comment
        </h3>
        <div className="text-center w-2/5">
          <form onSubmit={handleComment} className="bg-gray-100 rounded py-5">
            <div className="flex justify-center ">
              <label>
                <textarea
                  className="rounded-lg w-full mb-2 p-2 bg-white text-black font-semibold"
                  name="text"
                  id="text"
                ></textarea>
              </label>
            </div>

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
            <p></p>
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
      {/* comment input end  */}
    </section>
  );
};

export default PostDetails;
