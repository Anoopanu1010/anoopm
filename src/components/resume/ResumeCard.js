import React from 'react'

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-0 hover:bg-opacity-20 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 border-2 border-gray-500 border-opacity-25 shadow-xl">


        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-l md:text-2xl font-bold text-black">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 font-semibold text-black">
              {subTitle}
            </p>
          </div>
          <div>
            {/* <p className="px-4 group-hover:text-white py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p> */}
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-black ">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard