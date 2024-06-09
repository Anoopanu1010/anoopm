import React from 'react';
import { CiDesktop } from 'react-icons/ci';
import * as bi from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className=" text-black w-full py-20 border-b-[1px] border-b-black" /*style={{ backgroundImage: `url(${New})`, backgroundSize: 'cover', backgroundPosition: 'center' }}*/ >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 text-black md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Top-rated Web Application Development freelancer. Kickstart your customized and engaging web app with my development services."
          icon={<CiDesktop />}
        />      

        <Card
          title="System Engineering"
          des="I am focused on designing, installing, testing, operating, and maintaining integrated    IT   solutions   for the  client."
          icon={<bi.BiBuildings />}
        />
        <Card
          title="Surveillance System"
          des="Striving to offer surveillance solutions tailored to meet the security needs of small, medium, and large businesses. "
          icon={<bi.BiCctv />}
        />
        <Card
          title="Graphic Designing"
          des="Creating creative business-oriented logos and designs using the latest tools."
          icon={<FaOpencart />}
        />
        <Card
          title="IT Support"
          des="Assistance and solutions for technology-related problems, including setup and troubleshooting."
          icon={<MdOutlineSupportAgent />}
        />
        <Card
          title="Hardware Service"
          des="Assistance and solutions for technology-related problems, including setup and troubleshooting."
          icon={<MdOutlineSupportAgent />}
        />
      </div>
    </section>
  );
};

export default Features;
