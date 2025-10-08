import React from "react";
import playStoreImg from '../assets/PlayStore.png'
import appStoreImg from '../assets/AppStore.png'
import heroImg from '../assets/hero.png'


const HomeHero = () => {
  return (
    <div className="w-full">

      <div className="text-center flex flex-col items-center">
        <h1 className="text-7xl font-semibold">We Build <br /> <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="text-[#627382] mt-3 mb-7">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="flex gap-2">
            <a href="#" className="btn py-5 bg-transparent border-1.5 border-[#D2D2D2] flex gap-2">
                <img src={playStoreImg} alt="" />
                Google Play
            </a>
            <a href="#" className="btn py-5 bg-transparent border-1.5 border-[#D2D2D2] flex gap-2">
                <img src={appStoreImg} alt="" />
                App Store
            </a>
        </div>
      </div>

      <div className="py-10">
        <div className="flex flex-col items-center">
          <img src={heroImg} alt=""  className="w-fit"/>
        </div>

        <div className="w-full flex justify-center items-center text-white min-h-96 bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
            <div className="flex flex-col gap-18 justify-center items-center">
                <h2 className="text-5xl font-bold">Trusted by Millions, Built for You</h2>
                <div className="grid grid-cols-3 gap-40">

                  <div className="space-y-7 text-center">
                    <p className="text-sm">Total Downloads</p>
                    <h4 className="text-6xl font-bold">29.6M</h4>
                    <p className="text-sm">21% more than last month</p>
                  </div>

                  <div className="space-y-7 text-center">
                    <p className="text-sm">Total Reviews</p>
                    <h4 className="text-6xl font-bold">906K</h4>
                    <p className="text-sm">46% more than last month</p>
                  </div>

                  <div className="space-y-7 text-center">
                    <p className="text-sm">Active Apps</p>
                    <h4 className="text-6xl font-bold">132+</h4>
                    <p className="text-sm">31 more will Launch</p>
                  </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
