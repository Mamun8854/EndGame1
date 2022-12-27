import React from "react";
// import { useForm } from "react-hook-form";

const PostInput = () => {
  //   const { register, handleSubmit } = useForm();

  const imageHostKey = process.env.REACT_APP_imageHostKey;
  console.log(imageHostKey);

  const handleAddPost = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleAddPost}>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="files" className="block text-sm font-medium mb-2">
                Photo
              </label>
              <input type="file" name="photo" id="photo" />
              {/* <div className="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  className="px-8 py-12 border rounded-md border-gray-300 text-gray-400 bg-white"
                />
              </div> */}
            </div>

            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm font-medium">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="bio"
                  name="description"
                  placeholder=""
                  className="w-full rounded-md text-gray-600 font-medium p-2"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-[100px] col-span-2 bg-blue-600 py-2 px-1 rounded text-white font-medium"
            >
              Post
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default PostInput;
