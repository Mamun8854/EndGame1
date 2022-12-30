import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AboutModal = () => {
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const aboutInfo = {
      user: userName,
      email,
      phone,
    };
    console.log(aboutInfo);

    fetch("https://doctors-portal-server-three-sand.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aboutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          //   setTreatment(null);
          toast.success("Booking Confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="about-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <h3 className="text-lg font-bold">{name}</h3> */}
          {/* onSubmit={handleBooking} */}
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
              defaultValue={user?.email}
              disabled
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
