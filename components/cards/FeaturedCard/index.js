export const FeaturedCard = ({ title, description }) => {
  return (
    <div

      className="flex items-center   p-2 w-fit "
    >
      <svg
        width={38}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="mr-2"
        viewBox="0 0 48 48"
      >
        <g>
          <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
          <path
            fill="#78B3EB"
            stroke="#00386C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M24 4l5.253 3.832 6.503-.012 1.997 6.188 5.268 3.812L41 24l2.021 6.18-5.268 3.812-1.997 6.188-6.503-.012L24 44l-5.253-3.832-6.503.012-1.997-6.188-5.268-3.812L7 24l-2.021-6.18 5.268-3.812 1.997-6.188 6.503.012L24 4z"
          ></path>
          <path
            stroke="#00386C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M17 24l5 5 10-10"
          ></path>
        </g>
      </svg>
      <p className="font-sans font-bold text-2xl text-white">{title}</p>
    </div>
  );
};
