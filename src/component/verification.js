
import React from "react";
import verification from "../img/verification.png";
const Verification = (props) => {
 
  return (
    <div className="absolute top-0 left-0 right-0 bg-gray-900 bg-opacity-50" >
        
        <div className="w-4/5 mx-auto my-24 flex drop-shadow shadow bg-white rounded-xl">
        <div className="h-[685px] w-full">
          <img src={verification} className="w-full h-full object-cover"/>
        </div>

        <div className="w-full px-24 pt-32"> 

            <h1 className=" text-3xl text-green-800 font-bord pb-8 "> Email Verification</h1>
            <span className="text-l text-green-800 font-bord">Enter 5 Digit code we sent you via Email:ny ****@gmail.com</span>
             <form class="" action="#"> 
             <input
                type="text"
                name="code"
                id="code"
                class=" h-20 w-16 border border-green-800 border-4 text-gray-900 text-5xl py-4 text-center  rounded-lg"
                placeholder="___"
                required
              ></input> 
              <input
                type="text"
                name="code"
                id="code"
                class=" h-20 w-16 border border-green-800 border-4 text-gray-900 text-5xl py-4  ml-4 text-center  rounded-lg"
                placeholder="___"
                required
              ></input> 
              <input
                type="text"
                name="code"
                id="code"
                class=" h-20 w-16 border border-green-800 border-4 text-gray-900 text-5xl py-4 my-8 ml-4 text-center  rounded-lg"
                placeholder="___"
                required
              ></input> 
              <input
                type="text"
                name="code"
                id="code"
                class=" h-20 w-16 border border-green-800 border-4 text-gray-900 text-5xl my-8 py-4 ml-4 text-center  rounded-lg"
                placeholder="___"
                required
              ></input> 
              <input
                type="text"
                name="code"
                id="code"
                class=" h-20 w-16 border border-green-800 border-4 text-gray-900 text-5xl  py-4 ml-4  text-center  rounded-lg"
                placeholder="___"
                required
              ></input> 
             <div className="flex mt-8">
               <div className="">
               <button
            type="submit"
                  class="w-4/5 text-white  font-medium rounded-full text-sm  px-36 py-3.5 text-center dark:bg-green-900 "
          >
            Verify
          </button></div>
           <div class="text-m font-medium mt-4 text-gray-50 dark:text-gray-300">
      
            <a
              href="#"
              class=" mx-1.5 text-green-700 hover:underline "
            >
              Resend Code
            </a>
          </div>
             </div>
              <div class="text-m mt-14 ml-2 font-medium text-gray-50 dark:text-gray-300">
            <a
              href="#"
              class="  text-green-700 hover:underline "
            >
           Change Email
            </a>
          </div>
            </form> 
            </div> 
            </div>
    </div>
    
  )
};

export default Verification;
