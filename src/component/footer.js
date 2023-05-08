import React from "react";

import Linkedlin from "../img/OIPln1.png";
import Facbook from "../img/OIPfc1.png";
import Twitter from "../img/OIPln1.png";
import Instagram from "../img/OIPst1.png";

const Footer = () => {
  /**
   * here firstfooter container h2 tag we map that
   */
  const footerhtwotage = [
    { htwotext: "About Us" },
    { thwoone: "Quick Info" },
    { htwotwo: "Store Information" },
    { htwothree: "Customer Suport" },
    { htwofour: "FAQs" },
    { htwofive: "© Copyright 2023." },
  ];

  const images = [Linkedlin, Facbook, Twitter, Instagram];

  const pages = ["Who we are", "Why choose us?", "Compliance and ethics"];
  const pagestwo = ["Recyling 101", "Service Notification", "Holiday Schedule"];

  const pagesthree = [
    "Billing and Invoice Support",
    "Missed Pickups",
    "Manage my account",
  ];
  const pagesFoure = [
    "Where can i view my pickup Schedule",
    "What to do if i miss pickup",
    "How do i get help  with billing issues ",
  ];
  const pageFive = ["Contact", "Term of Use", "Privacy Policy"];

  return (
    <div className="mt-4 dark:bg-green-900 font-awesome">
      <footer className="p-6 dark:bg-green-900 dark:text-green-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2 key={i} className="font-bold text-white  text-[20px]">
                  {el.htwotext}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pages.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* end here first container of footer */}
          {/* second container start here */}
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2 key={i} className="font-bold text-white text-[20px]">
                  {el.thwoone}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:white">
              {pagestwo.map((el, i) => {
                return (
                  <a
                    className=" font-medium text-white hover:text-blue-700"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* second container end here */}
          {/* third container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2 key={i} className="font-bold text-white text-[20px]">
                  {el.htwothree}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesthree.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* third container end here */}
          {/* fourth container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2 key={i} className="font-bold text-white text-[20px]">
                  {el.htwofour}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesFoure.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/https://www.youtube.com/watch?v=494trQtUfR0 "
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* fourth container start here */}
      </footer>
      {/* here is another footer container */}
      <footer className="dark:bg-green-900 p-6">
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            {images.map((el, i) => {
              return (
                <a
                  className="flex items-center justify-center w-8 h-8 rounded-full border-white border-2 sm:w-6 sm:h-6 dark:text-green-900"
                  key={i}
                  rel="noopener noreferrer"
                  href="/"
                >
                  <img src={el} alt="logo" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
      <div className="flex text-white dark:bg-green-950 mt-6 font-owesome justify-between">
        <div className="m-4  ml-6">
          <p>Copyright C 2023</p>
        </div>
        <div className="m-4">
          <p>Contact | Term of Use | Privacy Policy</p>
        </div>
      </div>
    </div>
    // here is footer container end
  );
};

export default Footer;
