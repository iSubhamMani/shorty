import React from "react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-black text-black tracking-tight">
          SHORTY
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mt-2 font-medium">
          The no-nonsense URL shortener
        </p>
      </div>
    </header>
  );
};

export default Header;
