import React from "react";
function Login() {
  return (
  
    <section class=" flex justify-center bg-gray-50  ">
      <div class="mt-20 mb-20  border-2 border-gray-300 border-shadow-lg rounded-lg justify-center ">
        <div className="pt-16">
          <p class="text-center mb-6  text-lg font-normal text-black lg:text-xl ">
            Welcom Back to UMW
          </p>
          <form class="px-16 items-center  space-y-6  " action="#">
            <div className="">
              <label
                for="email"
                class="block mb-2 text-sm font-medium  text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class=" pt-5 border border-gray-300 text-gray-900 text-sm border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" name@company.com"
                required
              ></input>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="•••••••••"
                class=" pt-5 border border-gray-300 text-gray-900 text-sm border-gray-300 rounded-full a focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>
            <button
              type="submit"
              class="px-32 py-3 rounded-full text-base font-medium text-center text-white bg-green-900  hover: focus:ring-4 focus:ring-green-900 sm:w-auto dark:bg-green-900 dark:hover:bg-green-900 dark:focus:ringgreen-900"
            >
              Login
            </button>

            <div className="pt-5 flex justify-end ">
              <a className="" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="pt-3 pb-5 flex justify-end ">
              <h1>
                Need to create a new account?{" "}
                <span>
                  <a href="#">Register</a>
                </span>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
