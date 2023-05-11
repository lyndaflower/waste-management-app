import React from "react";
import Registe from "../img/regi.png";
function Register(props) {
  console.log(props);
  return (
    <div className="grid md:grid-cols-2 mx-auto my-12">
      <div className="h-[685px] w-full">
          <img src={Registe} className="w-full h-full object-cover"/>
        </div>

      {/* <div class="  border border-green-800 w-full  max-w-sm  bg-grey-400   rounded-lg shadow sm:p-6 md:p-8 "> */}

      <div className="  w-full    bg-grey-400   rounded-lg shadow sm:p-6 md:p-8 ">
        <form class="" action="#">
          <h1 class=" text-xl  font-medium mb-4  text-black ">Register</h1>
          <div className="grid md:grid-cols-2">
            <div className="border-green-950">
              <label
                for="email"
                class="block  text-sm font-medium text-gray-900 text-black"
              >
                Full Name
              </label>
              <input
                type="Name"
                name="Name"
                id="Name"
                class=" border border-green-950 border-2 mb-4 mr-4 text-black text-sm rounded-full w-full  p-2.5"
                placeholder="David Karega"
                required
              />
            </div>
            <div>
              <label
                for="PhoneNumber"
                class="block  text-sm ml-4 font-medium text-gray-900 text-black"
              >
                PhoneNumber
              </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                class=" border border-green-950 border-2 mb-4 ml-4 text-black text-sm rounded-full w-full p-2.5"
                placeholder="078*********"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block  text-sm font-medium text-gray-900 text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class=" border border-green-950 border-2 mb-4 mr-4 text-black text-sm rounded-full w-full p-2.5"
                placeholder="Example@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block text-sm ml-4 font-medium text-gray-900 text-black"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class=" border border-green-950 border-2 mb-4 ml-4 text-gray-900 text-sm rounded-full  w-full p-2.5 "
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:grid-cols-3 ">
            <div>
              <label
                for="PROVENCE"
                class="block  text-sm font-medium text-gray-900 text-black"
              >
                PROVENCE
              </label>
              <select
                id="provence"
                className=" border border-green-950 border-2 mb-4 text-black text-sm rounded-full w-lg p-2.5"
              >
                <option value="provence"></option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
              </select>
            </div>
            <div>
              <label
                for="DISTRICT"
                class="block  text-sm font-medium text-gray-900 text-black"
              >
                {" "}
                DISTRICT
              </label>
              <select
                id="district"
                className=" border border-green-950 border-2 mb-4 text-black text-sm rounded-full w-lg p-2.5"
              >
                <option value="district"></option>
                <option value="district">SELECT PROVENCE</option>
                <option value="district">SELECT PROVENCE</option>
                <option value="district">SELECT PROVENCE</option>
                <option value="district">SELECT PROVENCE</option>
              </select>
            </div>
            <div>
              <label
                for="SECTOR"
                class="block  text-sm font-medium text-gray-900 text-black"
              >
                {" "}
                SECTOR
              </label>
              <select
                id="sector"
                className=" border border-green-950 border-2 mb-4 text-black  px-4 text-sm rounded-full w-lg p-2.5"
              >
                <option value="provence"></option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
              </select>
            </div>
            <div>
              <label
                for="VILLAGE"
                class="block text-sm font-medium text-gray-900 text-black"
              >
                {" "}
                VILLAGE
              </label>
              <select
                id="village"
                className=" border border-green-950 border-2 mb-4 text-black text-sm rounded-full w-lg p-2.5"
              >
                <option value="provence"></option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
              </select>
            </div>
            <div>
              <label
                for="CELL"
                class="block  text-sm font-medium text-gray-900 text-black"
              >
                CELL
              </label>
              <select
                id="cell"
                className=" border border-green-950 border-2 mb-4 text-black text-sm rounded-full w-lg p-2.5"
              >
                <option value="provence"></option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
                <option value="provence">SELECT PROVENCE</option>
              </select>
            </div>
            <div>
              <label
                for="propertyNumber"
                class="block  text-sm font-medium text-gray-900 text-black"
              >
                propertyNumber
              </label>
              <input
                type="propertyNumber"
                name="propertyNumber"
                id="propertyNumber"
                class=" border border-green-950 border-2 mb-8 text-black text-sm rounded-full w-lg p-2.5"
                placeholder="*********"
                required
              />
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-800 mt-8 mb-8 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="block ml-2 text-sm mb-8 font-medium text-gray-900 text-black"
              >
                By Checking this box, you agree to the UWM web appterm of use
                and privacy policy
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="w-4/5 text-white  mb-8  focus:ring-4  font-medium rounded-full text-sm px-36 py-3.5 text-center dark:bg-green-900 "
            onClick={()=>props.setOpen(true)}
          >
            Submit
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      
            <a
              href="#"
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Already have an account ? login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
