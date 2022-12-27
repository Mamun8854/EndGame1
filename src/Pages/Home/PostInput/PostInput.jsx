import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const PostInput = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
        console.log(imageData);
        const PostInfo = {
          userName: user?.displayName,
          userImage: user?.photoURL,
          userEmail: user?.email,
          description: event.target.description.value,
          image: imageData?.data?.url,
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
            console.log(data);
            toast.success(`Successfully post`);
            event.target.reset();
          });
      });
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit(handlePost)}
        className="bg-gray-100  p-10 rounded-md flex flex-col items-center justify-center"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", { required: "Please provide your photo" })}
            type="file"
            className="p-10 bg-white rounded"
          />
          <p className="pt-2">
            {errors.image && (
              <p className="text-red-600 font-bold">{errors.image.message}</p>
            )}
          </p>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
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

        <input
          className="btn btn-accent mt-5 w-1/5"
          value="Add Post"
          type="submit"
        />
      </form>
    </section>
  );
};

export default PostInput;
