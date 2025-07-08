import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 ">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} ToDo-App. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm">
            <span>
              <span className="font-semibold">Designer:</span> Zeeshan Ahmed
            </span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>
              <span className="font-semibold">Frontend-Developer:</span> Zeeshan
              Ahmed
            </span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>
              <span className="font-semibold">Backend-Developer:</span> Zeeshan
              Ahmed
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
