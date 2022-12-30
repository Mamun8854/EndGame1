import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);
  const authEmail = user?.email;
  const [data, setData] = useState();

  const url = `http://localhost:5000/userInfo?userEmail=${authEmail}`;
  useEffect(() => {
    fetch(url).then((res) => res.json().then((data) => setData(data)));
  }, [url]);

  console.log(data);
  // const { userName, userPhoto, userEmail, location } = data;
  // console.log(user?.email);

  // update profile function

  const handleUpdateAbout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const location = form.address.value;

    const userInfo = {
      userName: name,
      userEmail: email,
      userPhoto: photoURL,
      location: location,
    };
    fetch(`http://localhost:5000/EditProfile?email=${authEmail}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <section className="flex flex-col items-center justify-center mt-6">
      <h2 className="text-3xl font-bold text-center py-4">Your Profile</h2>
      <div className="flex flex-col justify-center items-center max-w-2xl p-6 w-[600px] shadow-md rounded-xl mx-auto sm:px-12 dark:bg-gray-100 dark:text-gray-900">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Name : {user?.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              Email : {user?.email}
            </p>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              Email : {user?.email}
            </p>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              Email : {user?.email}
            </p>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              Email : {user?.email}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <label htmlFor="about-modal" className="btn btn-sm text-white">
              Edit
            </label>
          </div>
        </div>
      </div>

      {/* Edit about modal start  */}
      <input type="checkbox" id="about-modal" className="modal-toggle" />
      <div className="modal" id="about-modal">
        <div className="modal-box relative">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-lg font-bold">Update Your Profile</h2>
          <div className="modal-action justify-center">
            <form
              onSubmit={handleUpdateAbout}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input w-full input-bordered"
                defaultValue={data?.userName}
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input w-full input-bordered"
                readOnly
                defaultValue={data?.userEmail}
              />
              <input
                name="photo"
                type="text"
                placeholder="Enter your Photo"
                className="input w-full input-bordered"
                defaultValue={data?.userPhoto}
              />
              <input
                name="address"
                type="text"
                placeholder="Enter your address"
                className="input w-full input-bordered"
                defaultValue={data?.location}
              />
              <br />
              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </div>
      </div>
      {/* Edit about modal end  */}
    </section>
  );
};

export default About;
