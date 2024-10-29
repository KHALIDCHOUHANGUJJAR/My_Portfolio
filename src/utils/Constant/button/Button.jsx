/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <div>
      <button
      type="submit"
        className="px-6 py-3 text-white font-semibold bg-gray-900 
      rounded-md shadow-[0_0_15px_5px_rgba(0,125,255,0.5)]
       hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)] 
       focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
