import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-black p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Anoop Meleppat</h3>
        <h4 className="text-lg font-normal text-gray-200">
          Tech Aficionado: Exploring the Digital Frontier with Passion
        </h4>
        <p className="text-base text-gray-400 tracking-wide"></p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-gray-300">+971 506314374</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-gray-300">help@anoop.me</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-200">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
