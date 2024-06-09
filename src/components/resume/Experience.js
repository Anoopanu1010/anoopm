import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-black tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl text-green font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="IT Support | Web Developer "
            subTitle="Irisind Technologies Pvt ltd - ( 2021 - 2024 )"
            result="Kochin"
            des="Develop web apps where clients can easily customize their websites, adjusting elements like carousels and paragraphs to fit their unique ideas."
          />
          <ResumeCard
            title="Web Developer Freelance"
            subTitle="Livosys IT Solutions - (2022 - 2023)"
            result="Palakkad"
            des="My expertise spans both
            front-end and back-end development, ensuring that I can provide end-to end solutions for a seamless and user-friendly customization experience."
          />
          <ResumeCard
            title="Junior System Administrator"
            subTitle="MAZSOFT LIMITED  - (2016 - 2018)"
            result="Kochin"
            des="Proficiently install, configure, and maintain diverse computer hardware, includingdesktops, laptops, printers, and various peripherals.Skillfully assist in resolving network-related matters,"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
