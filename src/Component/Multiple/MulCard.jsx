/* eslint-disable react/prop-types */

const MulCard = ({ data }) => {
  const { Image, text } = data;
  return (
    <div className="flex flex-col ml-5 items-center bg-gray-800 rounded-lg px-6 py-8 shadow-[0_0_15px_5px_rgba(109,132,217,0.7)] hover:shadow-[0_0_20px_8px_rgba(0,123,255,1)] transition duration-300 sm:w-[45%] lg:w-[80%]">
      <img src={Image} alt={text} className="w-[70%] h-[20vh] mb-4" />
      <p className="text-white font-semibold">{text}</p>
    </div>
  );
};

export default MulCard;
