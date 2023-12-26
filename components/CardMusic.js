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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#000"
            viewBox="0 0 24 24"
            height={50}
            className="cursor-pointer"
          >
            <g fill="#1C274C">
              <path
                fillRule="evenodd"
                d="M5.467 4.392a.75.75 0 01-.001 1.06A9.219 9.219 0 002.75 12a9.22 9.22 0 002.775 6.606.75.75 0 11-1.05 1.071A10.72 10.72 0 011.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 011.06.001zm13.15.072a.75.75 0 011.06.011A10.718 10.718 0 0122.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 11-1.062-1.06A9.219 9.219 0 0021.25 12a9.218 9.218 0 00-2.644-6.475.75.75 0 01.01-1.06zM8.308 7.488a.75.75 0 01-.035 1.06c-.949.888-1.524 2.102-1.524 3.434 0 1.348.589 2.575 1.558 3.466a.75.75 0 11-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57 0-1.779.771-3.38 2-4.53a.75.75 0 011.06.036zm7.434.038a.75.75 0 011.06-.024c1.197 1.145 1.947 2.727 1.947 4.48 0 1.775-.767 3.373-1.99 4.521a.75.75 0 11-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428 0-1.313-.559-2.512-1.484-3.396a.75.75 0 01-.023-1.06z"
                clipRule="evenodd"
              ></path>
              <path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55 0 .562-.448.89-1.344 1.548a12.83 12.83 0 01-.718.495c-.197.125-.421.254-.653.381-.894.49-1.34.734-1.741.463-.401-.27-.438-.838-.51-1.971-.02-.32-.034-.635-.034-.917 0-.282.013-.596.034-.917.072-1.133.109-1.7.51-1.97.4-.271.847-.027 1.74.462.233.127.457.256.654.381.226.143.471.314.718.495z"></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#000"
            viewBox="0 0 24 24"
            height={30}
            className="mx-5 cursor-pointer"
          >
            <g fill="#1C274C">
              <path d="M2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2c1.886 0 2.828 0 3.414.586C10 3.172 10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18V6zM14 6c0-1.886 0-2.828.586-3.414C15.172 2 16.114 2 18 2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22c-1.886 0-2.828 0-3.414-.586C14 20.828 14 19.886 14 18V6z"></path>
            </g>
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
