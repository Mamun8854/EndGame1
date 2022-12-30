import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const About = () => {
  const { user, loading } = useContext(AuthContext);
  const authEmail = user?.email;
  const [data, setData] = useState();

  const url = `https://endgame1-server.vercel.app/userInfo?userEmail=${authEmail}`;
  useEffect(() => {
    fetch(url).then((res) => res.json().then((data) => setData(data)));
  }, [url]);

  // const { data: userInformation, refetch } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://endgame1-server.vercel.app/userInfo?userEmail=${authEmail}`
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // console.log(userInformation);

  // update profile function

  const handleUpdateAbout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const location = form.address.value;

    const userInfo = {
      userName: name,
      userEmail: email,
      userPhoto: photoURL,
      location: location,
    };
    fetch(`https://endgame1-server.vercel.app/EditProfile/${data?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          toast.success("Profile Updated");
        }
        // refetch();
        // console.log(data);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }
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
              Name : {data?.userName}
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
      <div className="modal">
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
              <button className="w-full ">
                <label
                  htmlFor="about-modal"
                  className="w-full bg-gradient-to-r bg-[#3A4256] uppercase text-white py-3 rounded-lg cursor-pointer mt-4"
                  type="submit"
                >
                  Update
                </label>
              </button>
              {/* <input
                className="btn btn-accent w-full"
                type="submit"
                value="Update"
              /> */}
            </form>
          </div>
        </div>
      </div>
      {/* Edit about modal end  */}
    </section>
  );
};

export default About;
