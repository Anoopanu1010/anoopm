import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className='bg-white'> 
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`${
              educationData
                ? "border-art rounded-[14px] text-white-500 bg-black hover:bg-art" // Change background and text color here
                : "rounded-s-[14px] border-transparent bg-green hover:text-art hover:bg-green hover:bg-opacity-75"
            } resumeLi`}
          >
            Learning Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`${
              skillData ? "border-art rounded-[14px] text-blue-500 bg-black hover:bg-art" : "border-transparent bg-green hover:text-art hover:bg-green hover:bg-opacity-75" // Change background and text color here
            } resumeLi`}
          >
            Core Competencies
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
            }}
            className={`${
              experienceData
                ? "border-art rounded-[14px] text-blue-500 bg-black hover:bg-art" // Change background and text color here
                : "border-transparent border-transparent bg-green hover:text-art hover:bg-green hover:bg-opacity-75"
            } resumeLi`}
          >
            Track Record
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(true);
            }}
            className={`${
              achievementData
                ? "border-art rounded-[14px] text-blue  -500 bg-black hover:bg-art" // Change background and text color here
                : "border-transparent rounded-e-[14px] border-transparent bg-green hover:text-art hover:bg-green hover:bg-opacity-75"
            } resumeLi`}
          >
            Current Studies
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume;
