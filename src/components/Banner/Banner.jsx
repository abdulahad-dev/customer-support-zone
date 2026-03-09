import Vector1 from '../../assets/vector1.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto pt-10 md:pt-18 px-4 lg:px-0 md:px-4">
      {/* In-Progress */}
      <div className="card bg-gradient-to-r from-[#632EE3] to-[#9F62F2] image-full w-full md:w-1/2 shadow-sm relative">
        <img
          className="absolute left-0 top-0 h-full w-20 md:w-50"
          src={Vector1}
          alt="Left"
        />
        <div className="flex flex-col justify-center h-full items-center text-white text-center p-10 md:p-14">
          <h2 className="card-title text-lg md:text-2xl">In-Progress</h2>
          <p className="text-2xl md:text-4xl font-bold">{inProgressCount}</p>
        </div>
        <img
          className="absolute right-0 top-0 h-full w-20 md:w-50 scale-x-[-1]"
          src={Vector1}
          alt="Right"
        />
      </div>

      {/* Resolved */}
      <div className="card bg-gradient-to-r from-[#54CF68] to-[#00827A] image-full w-full md:w-1/2 shadow-sm relative">
        <img
          className="absolute left-0 top-0 h-full w-20 md:w-50"
          src={Vector1}
          alt="Left"
        />
        <div className="flex flex-col justify-center h-full items-center text-white text-center p-10 md:p-14">
          <h2 className="card-title text-lg md:text-2xl">Resolved</h2>
          <p className="text-2xl md:text-4xl font-bold">{resolvedCount}</p>
        </div>
        <img
          className="absolute right-0 top-0 h-full w-20 md:w-50 scale-x-[-1]"
          src={Vector1}
          alt="Right"
        />
      </div>
    </div>
  );
};

export default Banner;
