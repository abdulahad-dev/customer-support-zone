import Vector1 from '../../assets/vector1.png';

const Banner = () => {
  return (
    <div className="flex gap-6 max-w-7xl mx-auto pt-18">
      <div className="card bg-gradient-to-r from-[#632EE3] to-[#9F62F2] image-full w-full shadow-sm">
        <img
          className="absolute left-0 top-0 h-full w-50"
          src={Vector1}
          alt="Left"
        />
        <div className="flex flex-col justify-center p-0 h-full items-center text-white text-center p-14">
          <h2 className="card-title">In-Progress</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
        <img
          className="absolute right-0  top-0 h-full w-50 scale-x-[-1]"
          src={Vector1}
          alt="right"
        />
      </div>
      <div className="card bg-gradient-to-r from-[#54CF68] to-[#00827A] image-full w-full shadow-sm">
        <img
          className="absolute left-0 top-0 h-full w-50"
          src={Vector1}
          alt="Left"
        />
        <div className="flex flex-col justify-center p-0 h-full items-center text-white text-center p-14">
          <h2 className="card-title">Resolved</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
        <img
          className="absolute right-0  top-0 h-full w-50 scale-x-[-1]"
          src={Vector1}
          alt="right"
        />
      </div>
    </div>
  );
};

export default Banner;
