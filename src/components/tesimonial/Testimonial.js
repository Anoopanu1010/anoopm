import React, { useState } from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Publication💻" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-center items-center text-center">

              <div className="w-full lgl:w-[60%] h-full flex flex-col  justify-between">
                <div className="w-full h-[70%] py-10 bg-white rounded-lg shadow-xl p-4 lgl:p-8 flex flex-col justify-center gap-4 border-[2px] lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl text-black text-bold lgl:text-2xl font-medium tracking-wide">
                        Stay Tuned for Engaging Reads: Our Blog Section is Under Construction!
                      </h3>
                        <p className="text-base text-gray-400 mt-3">

                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Welcome to AnoopTech Insights! 🚀 Explore the latest in tech trends, discover innovative gadgets, and delve into insightful discussions on all things technology. Join me, Anoop, on this exhilarating journey through the digital landscape. Stay tuned for engaging articles, expert opinions, and exciting updates. Let's unlock the endless possibilities of technology together! Don't forget to subscribe and stay connected. Happy reading! 🔍💡💻
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}




        </Slider>
      </div>
    </section>
  );
}

export default Testimonial