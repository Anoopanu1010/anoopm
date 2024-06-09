import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-black tracking-[4px]">Current Educational Endeavors</p>
          <h2 className="text-3xl md:text-4xl text-green font-bold">Currently Enrolled Studies</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Business Administration"
            subTitle="IT Management"
            result="Progress"
            des="Completing an MBA is a strategic move in my career plan to establish a strong foundation. I expect it to be advantageous, enhancing my skills and opening up new opportunities. It's a step towards gaining valuable expertise that will benefit my career growth."
          />
          <ResumeCard
            title="Developed by Google | Digital Marketing Certificate"
            subTitle="Coursera Online Platform "
            result="Progress"
            des="Mastering the Google Digital Marketing & E-commerce Professional Certificate is crucial because digital marketing and SEO are essential for business success today. These skills are powerful tools that I aim to add to my skill set to excel in the digital market."
          />
          <ResumeCard
            title="The Complete Artificial Intelligence and ChatGPT Course"
            subTitle="Udemy Online Platform"
            result="Progress"
            des="Learn how to use ChatGPT's new Plugins feature so you can accomplish much more with ChatGPT"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
