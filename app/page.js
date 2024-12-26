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
import { useSearchParams } from "next/navigation";
import MenBanner from "./components/homeComponents/MenBanner";

const page = () => {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");

  // console.log(gender);
  
  return (
    <div className="w-full mt-[15em]">
      {gender === "MEN" ? <MenBanner/> : <Banner/>}
      <div className="px-[4em] flex flex-col gap-4 lg:flex-row justify-cneter items-center">
        {/* left side -  shop now */}
        <div className="flex flex-col lg:w-1/3 justify-center items-center gap-3">
          <h1 className="text-xl tracking-[.2em]">NEW IN</h1>
          <div className="flex justify-center items-center">          
            <p className="font-thin text-md">THE NEWEST TRENDS OF THE SEASON</p>
          </div>
          <Button className="bg-black w-fit">SHOP NOW</Button>
        </div>
        <div className="flex-1">
          <ImagesSlider />
        </div>
      </div>
      {gender === "MEN" ? <ThreeCards/> :   <div className="mt-[3em] flex justify-center items-center gap-3">
        <TwoCards />
      </div>}
    
      <hr className="w-full mt-[1em]"/>

      {gender === "MEN" ? <GitTheLook/> : <div className="px-[4em] flex flex-col gap-4 lg:flex-row justify-cneter items-center mt-[2em]">
        {/* left side -  shop now */}
        <div className="flex flex-col w-1/3 justify-center items-center gap-3">
          <h1 className="text-xl tracking-[.2em]">HERE TO DAZZLE</h1>
          <p className="font-thin text-md">FOR EVERY CELEBRATION</p>
          <Button className="bg-black w-fit">DISCOVER THE DROP</Button>
        </div>
        <div className="flex-1">
          <ImagesSlider />
        </div>
      </div>}

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
