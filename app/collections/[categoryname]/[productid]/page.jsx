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
import { FaChevronDown, FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";

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
    <div className="flex flex-col">
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
        <div
          className="flex flex-col space-y-4 h-[70vh] overflow-scroll"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
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
      <div className="mt-3">
            <ul className="space-y-4">
                  {/* Category  */}
                  <li className="border-b-[1px]	pb-[1em]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCategory("category")}
                    >
                      <h3 className="font-thin text-lg">CATEGORY</h3>
                      {openCategory.category ? <FaMinus /> : <FaPlus />}
                    </div>
                    {openCategory.category && (
                      <div className="ml-4 mt-2 space-y-2 ">
                        {/* Sub-Link 1 */}
                        <div>
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSubCategory("boots")}
                          >
                            <label className="flex items-center space-x-2">
                              <input type="checkbox" />
                              <span>BOOTS</span>
                            </label>
                            {openSubCategory.boots ? (
                              <FaChevronDown />
                            ) : (
                              <FaChevronRight />
                            )}
                          </div>
                          {openSubCategory.boots && (
                            <div className="ml-4 mt-2 space-y-2 h-[200px] overflow-y-scroll">
                              {boots.map((boot) => (
                                <label
                                  key={boot.id}
                                  className="flex items-center space-x-2"
                                >
                                  <input type="checkbox" />
                                  <span>{boot.title}</span>
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                        {/* Sub-Link 2 */}
                        <div>
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSubCategory("heels")}
                          >
                            <label className="flex items-center space-x-2">
                              <input type="checkbox" />
                              <span>HEELS</span>
                            </label>
                            {openSubCategory.heels ? (
                              <FaChevronDown />
                            ) : (
                              <FaChevronRight />
                            )}
                          </div>
                          {openSubCategory.heels && (
                            <div className="ml-4 mt-2 space-y-2 h-[250px] overflow-y-scroll">
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>BLOCK HEELS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>EVENING HEELS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>HEIGH HEELS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>LOW HEELS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>MID HEELS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>MULES</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>PLATFORMS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>PUMPS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>SANDLES</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>STILETTOS</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>WEDGES</span>
                              </label>
                            </div>
                          )}
                        </div>
                        {/* Sub-Link 3 */}
                        <div>
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSubCategory("sneakers")}
                          >
                            <label className="flex items-center space-x-2">
                              <input type="checkbox" />
                              <span>SNEAKERS</span>
                            </label>
                            {openSubCategory.sneakers ? (
                              <FaChevronDown />
                            ) : (
                              <FaChevronRight />
                            )}
                          </div>
                          {openSubCategory.sneakers && (
                            <div className="ml-4 mt-2 space-y-2">
                              <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>HEIG-TOP SNEAKERS</span>
                              </label>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
        
                  {/* DESIGNERS */}
                  <li className="border-b-[1px]	pb-[1em]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCategory("designers")}
                    >
                      <h3 className="font-thin text-lg">DESIGNERS</h3>
                      {openCategory.designers ? <FaMinus /> : <FaPlus />}
                    </div>
                    {openCategory.designers && (
                      <div className="mt-2 space-y-4">
                        {/* Search Input */}
                        <input
                          type="text"
                          placeholder="SEARCH OPTIONS"
                          className="w-full border border-gray-300 rounded-md p-2"
                        />
                        {/* Checkboxes */}
                        <div className="space-y-2 h-[250px] overflow-y-scroll">
                          {disigners.map((designer) => (
                            <label
                              key={designer.id}
                              className="flex items-center space-x-2"
                            >
                              <input type="checkbox" />
                              <span>{designer.title}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
        
                  {/* SIZE */}
                  <li className="border-b-[1px]	pb-[1em]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCategory("size")}
                    >
                      <h3 className="font-thin text-lg">SIZE</h3>
                      {openCategory.size ? <FaMinus /> : <FaPlus />}
                    </div>
                    {openCategory.size && (
                      <div className="ml-4 mt-2 space-y-2 h-[250px] overflow-y-scroll">
                        {sizes.map((size) => (
                          <label key={size.id} className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>{size.title}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </li>
        
                  {/* COLOR */}
                  <li className="border-b-[1px]	pb-[1em]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCategory("color")}
                    >
                      <h3 className="font-thin text-lg">COLOR</h3>
                      {openCategory.color ? <FaMinus /> : <FaPlus />}
                    </div>
                    {openCategory.color && (
                      <div className="ml-4 mt-2 space-y-2 h-[250px] overflow-y-scroll">
                        {colors.map((color) => (
                          <label key={color.id} className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>{color.title}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </li>
                  {/* HEEL-HEIGHT */}
                  <li className="border-b-[1px]	pb-[1em]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCategory("hellheight")}
                    >
                      <h3 className="font-thin text-lg">HEEL HEIGHT</h3>
                      {openCategory.hellheight ? <FaMinus /> : <FaPlus />}
                    </div>
                    {openCategory.hellheight && (
                      <div className="ml-4 mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>LOW HEELS</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>MID HEELS</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>HIGH HEELS</span>
                        </label>
                      </div>
                    )}
                  </li>
                  {/* PERCENT SALE */}
                  <li className="border-b-[1px]	pb-[1em]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCategory("percentsale")}
                    >
                      <h3 className="font-thin text-lg">PERCENT SALE</h3>
                      {openCategory.percentsale ? <FaMinus /> : <FaPlus />}
                    </div>
                    {openCategory.percentsale && (
                      <div className="ml-4 mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>ABOVE 70%</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>50% - 70%</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>30% - 50%</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>10% - 30%</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span>UNDER 10%</span>
                        </label>
                      </div>
                    )}
                  </li>
                  {/* PRICE */}
                  <li className="border-b-[1px]	pb-[1em]">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleCategory("price")}
                    >
                      <h3 className="font-thin text-lg">PRICE</h3>
                      {openCategory.price ? <FaMinus /> : <FaPlus />}
                    </div>
                    {openCategory.price && (
                      <div className="mt-2 space-y-2">
                        <div className="flex flex-col items-center justify-center  max-w-md mx-auto">
                          {/* الحقول */}
                          <div className="flex justify-between items-center mb-4 gap-2">
                            <input
                              type="number"
                              value={range[0]}
                              onChange={(e) => handleRangeChange(0, e.target.value)}
                              className="w-20 border border-gray-300 rounded p-2 text-center"
                            />
                            <span className="text-lg font-medium">-</span>
                            <input
                              type="number"
                              value={range[1]}
                              onChange={(e) => handleRangeChange(1, e.target.value)}
                              className="w-20 border border-gray-300 rounded p-2 text-center"
                            />
                          </div>
        
                          {/* السلايدر */}
                          <div className="relative w-full h-2 bg-gray-300 rounded">
                            <input
                              type="range"
                              min="23"
                              max="1515"
                              value={range[0]}
                              onChange={(e) => handleRangeChange(0, e.target.value)}
                              className="absolute appearance-none w-full h-2 bg-transparent"
                              style={{ zIndex: 1 }}
                            />
                            <input
                              type="range"
                              min="23"
                              max="1515"
                              value={range[1]}
                              onChange={(e) => handleRangeChange(1, e.target.value)}
                              className="absolute appearance-none w-full h-2 bg-transparent"
                            />
                            <div
                              className="absolute h-2 bg-blue-500 rounded"
                              style={{
                                left: `${((range[0] - 23) / (1515 - 23)) * 100}%`,
                                right: `${
                                  100 - ((range[1] - 23) / (1515 - 23)) * 100
                                }%`,
                              }}
                            />
                          </div>
        
                          {/* الأرقام تحت السلايدر */}
                          <div className="flex justify-between w-full mt-2">
                            <span>{range[0]}</span>
                            <span>{range[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>

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
          <p>
            4 interest-free payments of <span>KWD</span> <span>127.500</span>.
            No fees. Shariah-compliant.{" "}
            <a href="/" className="underline" target="_blank">
              Learn more
            </a>
          </p>
          <Image
            src="/app/images/taddy.jpg"
            width={20}
            height={20}
            alt="picture"
          />
        </div>

        <Link
          href="/"
          className="flex w-full justify-between items-center p-3 mt-4 font-thin border-y-[1px] text-black bg-transparent"
        >
          <div>VIEW IMAGES</div>
          <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
}
