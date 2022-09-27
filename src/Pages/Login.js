/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context";
import history from "../helper/history";
import ST24 from '../assets/st24.png';

export default function Login() {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (auth.isLogin) {
      history.push("/");
    }
  }, [auth.isLogin]);

  const handleChange = (e, type) => {
    e.persist();
    const value = e.target.value;
    const current = {};
    current[type] = value;

    setUser((prev) => ({ ...prev, ...current }));
  };

  const handleLogin = () => {
      auth.login(user);
  };
  return (
    <>
      {/* 
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={ST24}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <label>UUID</label>
              <div class="relative text-gray-700">
                <input
                  class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  placeholder="Please enter your UUID"
                  required
                  value={user.username}
                  onChange={(e) => handleChange(e, "username")}
                />
                <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <label>Password</label>
              <div class="relative text-gray-700">
                <input
                  class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="password"
                  placeholder="Please enter your Password"
                  required
                  value={user.password}
                  onChange={(e) => handleChange(e, "password")}
                />
                <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <FontAwesomeIcon icon={faKey} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
