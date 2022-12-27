import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, updateUserProfile, Loading } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, password);

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-900  w-full">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                required
                placeholder="Enter your photoURL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 dark:text-white"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Have an account yet ?
              <Link
                to="/login"
                className="hover:underline text-blue-600 font-medium"
              >
                <></> Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
