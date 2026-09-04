import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center px-6 text-center">
      <h1 className="font-serif text-8xl md:text-9xl font-extralight text-[#d4c5b9] tracking-widest uppercase mb-6">
        404
      </h1>
      <h2 className="text-lg md:text-xl uppercase tracking-[0.2em] text-[#f5f5f5] mb-4">
        This page doesn't exist.
      </h2>
      <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md leading-relaxed mb-12">
        The page you're looking for may have moved or no longer exists.
      </p>
      <Link
        to="/"
        className="border border-[#2a2a2a] px-8 py-4 text-xs uppercase tracking-widest text-[#f5f5f5] hover:bg-[#d4c5b9] hover:text-black transition-all duration-500 cursor-pointer"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
