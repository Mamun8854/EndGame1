import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const PostInput = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [disable, setDisable] = useState(true);

  const current = new Date();
  const time = current.toLocaleTimeString("en-US");

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imageHostKey;

  const handlePost = (data, event) => {
    event.preventDefault();
    const image = data?.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const imgbburl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(imgbburl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData);
        const PostInfo = {
          userName: user?.displayName,
          userImage: user?.photoURL,
          userEmail: user?.email,
          description: event.target.description.value,
          image: imageData?.data?.url,
          date: date,
          time: time,
          currentReact: 0,
        };

        // save doctors info to db
        fetch("http://localhost:5000/post", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(PostInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            toast.success(`Successfully post`);
            event.target.reset();
            navigate("/media");
          });
      });
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(handlePost)}
        className="bg-gray-100  p-5 rounded-md flex flex-col gap-4 items-center justify-center"
      >
        <div className="flex gap-4 items-center justify-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Photo</span>
            </label>
            <input
              {...register("image", {
                required: "Please provide your photo",
              })}
              type="file"
              className="bg-white file-input file-input-bordered w-full max-w-xs"
            />
            <p className="pt-2">
              {errors.image && (
                <p className="text-red-600 font-bold">{errors.image.message}</p>
              )}
            </p>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Please provide description",
              })}
              type="text"
              className="w-full max-w-xs p-2 rounded"
            />
            <p className="pt-2">
              {errors.description && (
                <p className="text-red-600 font-bold">
                  {errors.description.message}
                </p>
              )}
            </p>
          </div>
        </div>
        {user ? (
          <button
            type="submit"
            className="btn btn-accent mt-5 w-1/5 font-bold disabled"
          >
            Add Post
          </button>
        ) : (
          <a href="#my-modal-2" className="btn btn-accent mt-5 w-1/5 font-bold">
            Add Post
          </a>
        )}

        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg">You want to add a post ??</h3>
            <p className="py-4">Please Login First and then add your post.</p>
            <div className="modal-action">
              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PostInput;
