/* eslint-disable react/no-unescaped-entities */
const Heading = ({text}) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-5">
        <div className="h-[4px] w-52 bg-blue-500"></div>

        <h2 className="text-3xl text-white mx-4 font-bold">{text}</h2>

        <div className="h-[4px] w-52 bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Heading;
