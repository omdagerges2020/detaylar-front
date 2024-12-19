"use client";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { TbRuler2 } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const ProductGallery = ({ images }) => {
  const imageRefs = useRef([]);

  const scrollToImage = (index) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex justify-center items-start gap-[4em] mt-8">
      {/* Small Pictures */}
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => scrollToImage(index)} // التنقل للصورة الكبيرة
            className="w-20 h-24 object-cover cursor-pointer	focus:ring-4 focus:ring-black"
          />
        ))}
      </div>

      {/* Large Pictures */}
      <div className="flex flex-col space-y-4 h-[70vh] overflow-scroll">
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className="flex justify-center"
          >
            <img
              src={image}
              alt={`Large Image ${index}`}
              className="w-[500px] h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// images
const images = [
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-1_800x.jpg?v=1699195418",
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-2_800x.jpg?v=1699195417",
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST_800x.jpg?v=1699195417",
];

export default function ProductPage() {
  const [count, setCount] = useState(1);

  return (
    <div className="p-10 grid gird-cols-1 lg:grid-cols-2 gap-[4em] bg-white mt-[10em]">
      <ProductGallery images={images} />
      <div className="mt-8 lg:max-w-[410px]">
        <h3 className="mb-4">Title Of Product</h3>
        <h1 className="text-2xl mb-4  tracking-[.2em]">
          CHANDELIER 105 CRYSTAL-EMBELLISHED SANDALS
        </h1>
        <span className="text-[#686868] text-md mb-2">510 KD</span>
        <p className="bg-[#F7F7F7] text-[#686868]">
          Includes all taxes & duties if shipping to USA, Kuwait or KSA; You
          will not pay anything else upon delivery Read more{" "}
          <a href="./" target="_blank" className="underline">
            here
          </a>
          .
        </p>
        <div className="flex flex-col gap-2 justify-center items-center px-3 mt-4 border-2 border-[#EEEEEE] p-5">
          <div className="flex gap-3">
            <img
              src="https://shapp.thahab.com/storage/eta/icons/R1J8bfkEGfugobwwv7Zqg0Ok6L4zTlyUyNWz0DzY.jpg"
              alt="plane"
              className="w-[60px]"
            />
            <span className="text-[#666666]">Shipped within 4 days</span>
          </div>
          <div className="flex flex-col justify-center items-center text-[#828282]">
            <h1 className="text-sm">
              This estimate is not guaranteed. For more details refer to
            </h1>
            <a href="./" className="underline ml-4">
              shipping policy
            </a>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <TbRuler2 className="text-[30px] text-gray-400" />
          <Link href={`./`} className="underline">
            Size Chart
          </Link>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <h1 className="text-[#959595]">Color:</h1>
          <button className="border-[1px] p-2 text-[#959595]">Ivory</button>
        </div>
        <Menu placement="left">
          <MenuHandler>
            <Button className="w-full text-start bg-transparent border-[1px] rounded-none mt-3 shadow-none hover:shadow-none text-[#7D7D7D] text-md font-thin">
              Size: EU 37
            </Button>
          </MenuHandler>
          <MenuList className="h-96 overflow-y-auto">
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                <h1>EU 36.5</h1>
                <p>ONLY 1 LEFT</p>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
        <div className="flex items-center justify-start gap-4 border-[1px] w-fit mt-4 font-thin">
          {/* min buttton */}
          <button
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
            className="px-4  text-2xl rounded-sm"
          >
            -
          </button>

          {/* number */}
          <span className="text-xl font-thin">{count}</span>

          {/* plus button  */}
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 text-black text-xl rounded-md"
          >
            +
          </button>
        </div>
        <Button className="bg-white mt-4 w-full shadow-none border-[1px] tracking-widest hover:bg-black text-[#8A8A8A] hover:text-white transition-all duration-500 ease-out relative overflow-hidden">
          <span className="absolute top-0 left-[-100%] w-full h-full bg-black transition-all duration-500 ease-out hover:left-0"></span>
          ADD TO CART
        </Button>

        <Link
          href="/"
          className="flex w-full justify-start items-center p-3 mt-4 text-white bg-black"
        >
          <IoIosHeartEmpty />
          <div className="flex justify-center w-full">ADD TO WHISHLIST</div>
        </Link>

        <div className="w-full flex gap-[4em] border-[1px] p-4 mt-4 rounded-md">
          <p>4 interest-free payments of <span>KWD</span> <span>127.500</span>. No fees. Shariah-compliant. <a href="/" className="underline" target="_blank">Learn more</a></p>
          <Image src="/app/images/taddy.jpg" width={20} height={20}/>
        </div>

        <Link
          href="/"
          className="flex w-full justify-between items-center p-3 mt-4 font-thin border-y-[1px] text-black bg-transparent"
        >
          <div>VIEW IMAGES</div>
          < MdKeyboardArrowRight/>
        </Link>
      </div>
    </div>
  );
}
