import React from "react";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-900  w-full">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        </div>
        <form className="space-y-12 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label for="email" className="block mb-2 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 dark:text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Don't have an account yet ?
              <a
                rel="noopener noreferrer"
                href="/"
                className="hover:underline text-blue-600 font-medium"
              >
                <></> Sign up
              </a>
            </p>
          </div>
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-3/5 mx-auto px-2 py-3 space-x-4 font-medium text-black border rounded-md bg-gray-400"
          >
            <FaGoogle></FaGoogle>
            <p>Login with Google</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
