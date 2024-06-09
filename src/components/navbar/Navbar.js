import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDownload = () => {
    const resumeUrl = '/path/to/resume.pdf'; // Replace with your actual PDF file URL
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-t-[4px] border-t-indigo-500 p-2">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-2 lg:gap-7">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-white hover:text-bold hover:bg-art hover:p-1.5 hover:rounded-b-xl duration-300 hover:border-green hover:border-t-[5px]"
              key={_id}
            >
              <Link activeClass="active" to={link} spy={true} smooth={true} offset={-70} duration={500}>
                {title}
              </Link>
            </li>
          ))}
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>
              Hire📥
            </button>
          </li>
        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum soluta perspiciatis molestias enim cum repellat, magnam exercitationem distinctio aliquid nam.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer duration-300 hover:text-art">
                    <Link onClick={() => setShowMenu(false)} activeClass="active" to={item.link} spy={true} smooth={true} offset={-70} duration={500}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>
                    Hire📥
                  </button>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
              <span onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
