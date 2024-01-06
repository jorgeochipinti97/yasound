import React from "react";

export const CardMusic = () => {
  return (
    <div className="flex justify-center flex-col items-center mx-5">
      <div className=" p-8 rounded-lg shadow-xl w-80 backdrop-blur-lg	hover:bg-gray-200 transition-all">
        {/* Album Cover */}
        <img
          src="https://telegra.ph/file/2acfcad8d39e49d95addd.jpg"
          alt="idk - Highvyn, Taylor Shin"
          className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
        />
        {/* Song Title */}
        <h2 className="text-xl font-semibold text-center">idk</h2>
        {/* Artist Name */}
        <p className="text-gray-600 text-sm text-center">
          Highvyn, Taylor Shin
        </p>
        {/* Music Controls */}
        <div className="mt-6 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={30} className="cursor-pointer">
      <path
        fill="#000"
        d="M21.409 9.353a2.998 2.998 0 010 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968z"
      ></path>
    </svg>
       
        </div>
        {/* Progress Bar */}
        <div className="mt-6 bg-red-200 h-2 rounded-full">
          <div className="bg-violet-500 h-2 rounded-full w-1/2"></div>
        </div>
        {/* Time Information */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>1:57</span>
          <span>3:53</span>
        </div>
      </div>
      <button class="animated-button mt-5">
        <svg
          viewBox="0 0 24 24"
          class="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span class="text">Agregar al carrito</span>
        <span class="circle"></span>
        <svg
          viewBox="0 0 24 24"
          class="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </div>
  );
};
