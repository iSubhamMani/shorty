import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-16 border-t-4 border-black">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-bold text-black mb-2">
          SHORTY - KEEP IT SHORT & SWEET
        </p>
        <p className="text-gray-600 font-medium">
          Fast, reliable, and beautifully simple URL shortening
        </p>
        <div className="mt-4 space-x-6">
          <a
            href="#"
            className="text-black font-bold hover:underline decoration-4 underline-offset-4"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-black font-bold hover:underline decoration-4 underline-offset-4"
          >
            CONTACT
          </a>
          <a
            href="#"
            className="text-black font-bold hover:underline decoration-4 underline-offset-4"
          >
            PRIVACY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
