"use client";
import React from "react";
import Banner from "./components/homeComponents/Banner";
import { Button } from "@material-tailwind/react";
import ImagesSlider from "./components/homeComponents/ImagesSlider";
import TwoCards from "./components/homeComponents/TwoCards";
import SecondTwoCards from "./components/homeComponents/SecondTwoCards";
import ThreeCards from "./components/homeComponents/ThreeCards";
import GitTheLook from "./components/homeComponents/GitTheLook";
import GiftCard from "./components/homeComponents/GiftCard";
import Aboutus from "./components/homeComponents/Aboutus";

const page = () => {
  return (
    <div className="w-full mt-[15em]">
      <Banner />
      <div className="px-[4em] flex gap-4 ">
        {/* left side -  shop now */}
        <div className="flex flex-col w-1/3 justify-center items-center gap-3">
          <h1 className="text-xl tracking-[.2em]">NEW IN</h1>
          <p className="font-thin text-md">THE NEWEST TRENDS OF THE SEASON</p>
          <Button className="bg-black w-fit">SHOP NOW</Button>
        </div>
        <div className="flex-1">
          <ImagesSlider />
        </div>
      </div>
      <div className="mt-[3em] flex justify-center items-center gap-3">
        <TwoCards />
      </div>
      <div className="px-[4em] flex gap-4 ">
        {/* left side -  shop now */}
        <div className="flex flex-col w-1/3 justify-center items-center gap-3">
          <h1 className="text-xl tracking-[.2em]">HERE TO DAZZLE</h1>
          <p className="font-thin text-md">FOR EVERY CELEBRATION</p>
          <Button className="bg-black w-fit">DISCOVER THE DROP</Button>
        </div>
        <div className="flex-1">
          <ImagesSlider />
        </div>
      </div>
      <div className="mt-[3em] flex justify-center items-center gap-3">
        <SecondTwoCards />
      </div>
      <ThreeCards/>
      <GitTheLook/>
      <GiftCard/>
      <Aboutus/>
    </div>
  );
};

export default page;
