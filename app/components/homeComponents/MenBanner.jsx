import React from "react";
import Image from "next/image";
import Link from "next/link";

const MenBanner = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-[5em] px-7">
        <Image
          src="/assets/images/men-banner.png"
          width={800}
          height={750}
          alt="picture"
        />
        <div className="flex justify-center gap-3 items-center flex-col w-full">
            <p className=" font-thin tracking-[.3em]">
            The Ultimate Seasonal Edit
            </p>
          <h1 className="text-2xl tracking-[.3em]">Winter Wardrobe</h1>
          <Link
            href={``}
            className="bg-black text-white text-md tracking-widest font-thin rounded-none p-4"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenBanner;
