import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-8 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-black tracking-[4px]">Academic Performance</p>
          <h2 className="text-3xl md:text-4xl text-green font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Application"
            subTitle="Glocal University India (2021 - 2022)"
            result="3.20/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Cisco Certified Network Associate (CCNA)"
            subTitle="Cisco (2024)"
            result="4.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Bachelor of Computer Application"
            subTitle="Rabindranath Tagore University (2018 - 2020)"
            result="4.1/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Network Engineering, System Engineering"
            subTitle="ICS GROUP OF INSTITUTIONS (2016)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Education;
