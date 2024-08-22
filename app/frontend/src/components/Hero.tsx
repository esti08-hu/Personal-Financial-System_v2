import React from "react";

const Hero = () => {
  return (
    <div id="hero"
      style={{ backgroundColor: "rgba(0, 172, 205, 0.25)" }}
      className="hero-container flex items-center mt-20 w-full justify-center relative"
    >
      <div className="hero flex h-full w-4/6 justify-between items-center p-10">
        <div className="flex flex-col items-start justify-center max-w-max h-96 gap-5">
          <h1 className="text-4xl font-black text-[#22577A] mb-6 w-96">
            Plan your future with confidence.
          </h1>
          <p className="text-2xl font-bold text-[#00ABCD] w-72">
            Create and manage budgets effortlessly.
          </p>
          <a href="/signup">
          <button
                type="button"
                className="text-white border-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Create account now
              </button>
          </a>
        </div>
        <div className="">
          <img
            src="/images/hero-img.png"
            alt="Hero img"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
