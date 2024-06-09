import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaNetworkWired, FaCode } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { GiCctvCamera } from "react-icons/gi";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["System Engineer.", "Full Stack Developer.", "Technology Expert."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 ">
      <div className="flex flex-col gap-2">
        <h4 className="text-[14px] font-normal capitalize text-black mt-6 mb-1">Welcome to the domain I've crafted.</h4>
        <h1 className="text-[29px] font-bold text-black mb-2">
          Hi, I'm <span className="text-green capitalize">Anoop Meleppat</span>
        </h1>
        <h2 className="text-5xl font-bold text-art mb-4">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-black font-bodyFont leading-6 tracking-wide  ">
          <span className='text-1xl font-bold'>C</span>ombining network and hardware engineering with full-stack web development expertise, I craft innovative digital solutions driven by a passion for technology. Let's connect and explore limitless possibilities together.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-black uppercase font-titleFont mb-1">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/anoopmkd/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-black uppercase font-titleFont mb-1">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaNetworkWired />
            </span>
            <span className="bannerIcon">
              <FaCode />
            </span>
            <span className="bannerIcon">
              <SiAdobe />
            </span>
            <span className="bannerIcon">
              <GiCctvCamera />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
