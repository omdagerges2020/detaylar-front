"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Drawer,
  Typography,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Collapse, List, ListItem } from "@material-tailwind/react";

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { VscAccount } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import MenuWithSearchInput from "./headerComponents/CountriesMenues";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux-system/slices/categoriesSlice";

const languages = [
  {
    name: "ENGLISH",
  },
  {
    name: "العربية",
  },
];

const navListMenuItems = [
  {
    title: "CATEGORY NAME",
  },
  {
    title: "FEATURED DESIGNERS",
  },
  {
    title: "SHOP BY",
  },
];

function NavListMenu({ title }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-5 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <div
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            <ul className="text-xl font-thin">
              <li>ALL CLOTHES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
            </ul>
          </div>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <div
        className="relative"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium flex">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                {title}
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:flex w-full h-screen gap-[5em] px-[3em]">
            <ul className="grid grid-cols-3 gap-y-2 gap-x-[6em] outline-none outline-0">
              {renderItems}
            </ul>
            <div
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500 hover:border-none"
            >
              <Image
                src="https://thahab.com/cdn/shop/files/k_600x.jpg?v=1733927279"
                width={300}
                height={50}
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-thin">VALENTINO</p>
                <Link href="/" className="font-thin text-sm">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu title="DESIGNERS" />
      <NavListMenu title="CLOTHING" />
      <NavListMenu title="SHOES" />
      <NavListMenu title="BAGS" />
      <NavListMenu title="ACCESSORIES" />
      <NavListMenu title="BEAUTY" />
      <NavListMenu title="JEWELRY" />
      <NavListMenu title="SALE" />
      <NavListMenu title="HOME" />
      <NavListMenu title="KIDS" />
      <NavListMenu title="GIFTS" />
    </List>
  );
}

const Header = () => {
  const { categories } = useSelector((state) => state.categoriesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  console.log(categories?.data?.categories);

  const navsLinksFilter = categories?.data?.categories.filter((name)=>{
    return name.category_description !== "Men Fashion"
  })

  console.log(navsLinksFilter);
  

  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [changed, setChanged] = useState(false);
  const [header, setHeader] = useState(false);
  const [lang, setLang] = useState("ENGLISH");

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
      () => window.innerWidth <= 960 && setChanged(true)
    );
  }, []);

  return (
    <div className="w-full">
      <div className="w-full text-center">
        <span className="text-[#353232]  top-0 px-4 text-sm py-3 w-full font-thin	tracking-widest	 text-center uppercase">
          Free Express shipping Above $200
        </span>
      </div>
      <div
        className={
          header
            ? "flex flex-col justify-center items-center w-full bg-white border-b-2 fixed z-10 top-0"
            : "flex flex-col justify-center items-center w-full bg-white border-b-2 fixed z-10 top-8"
        }
      >
        <div className="bg-black w-full text-white px-3 flex justify-between items-center">
          <div>
            <Button className="bg-white font-normal	 uppercase text-[12px] px-3 w-[80px] rounded-none	text-black">
              <Link href={`./`}>Women</Link>
            </Button>
            <Button className="font-normal	 uppercase text-[12px] px-3 w-[80px] rounded-none	text-white">
              <Link href={`./`}>Men</Link>
            </Button>
          </div>
          <div>
            <MenuWithSearchInput />
          </div>
        </div>

        {/* language selector and websiteName and icons*/}
        <div className="flex flex-col items-center  px-[2em]  bg-white  w-full">
          <div className=" flex justify-between w-full  mt-4 items-center">
            <Menu
              open={openMenu}
              handler={setOpenMenu}
              className="hidden lg:block"
            >
              <MenuHandler>
                <Button
                  size="sm"
                  className="hidden hover:shadow-none text-[15px] font-thin	 border-none bg-transparent shadow-none text-black items-center gap-2 lg:flex"
                >
                  {lang}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="hidden max-h-72 w-20 lg:block">
                {languages.map(({ name }, index) => (
                  <MenuItem
                    key={index}
                    className="flex items-center gap-2"
                    onClick={() => setLang(name)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <div className="lg:hidden block">
              <React.Fragment>
                <IconButton
                  variant="text"
                  className="lg:hidden"
                  onClick={openDrawer}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                  )}
                </IconButton>
                <Drawer open={open} onClose={closeDrawer} className="p-4">
                  <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Material Tailwind
                    </Typography>
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={closeDrawer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </IconButton>
                  </div>
                  <Typography color="gray" className="mb-8 pr-4 font-normal">
                    Material Tailwind features multiple React and HTML
                    components, all written with Tailwind CSS classes and
                    Material Design guidelines.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                      Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                  </div>
                </Drawer>
              </React.Fragment>
            </div>

            {/* <div className=" lg:hidden  flex flex-wrap items-center justify-between text-blue-gray-900">
              <IconButton
                variant="text"
                className="lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
              </IconButton>
            </div> */}

            {/* nav links */}
            <div>
              <h1 className="tracking-[.5em] text-[30px]	">Detaylar</h1>
            </div>
            {/* icons */}
            <div className="flex text-[25px] font-bold gap-2">
              <VscAccount className="hidden lg:block" />
              <IoSearch />
              <MdOutlineShoppingBag
                onClick={openDrawerRight}
                className="cursor-pointer"
              />
              <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
                size="400px"
              >
                <div className="mb-6 flex items-center justify-between w-full">
                  <Typography variant="h5" color="blue-gray">
                    CART
                  </Typography>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerRight}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
                <Typography
                  color="gray"
                  className="mb-8 pr-4 font-normal border-y-[1px]"
                >
                  Spend 200 KD more and get free shipping!
                </Typography>
                <div className="flex gap-2 w-full h-screen">
                  <span>Your cart is empty</span>
                </div>
              </Drawer>

              <IoIosHeart />
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-around w-full font-light mt-3">
            {/* <NavList /> */}
            {categories?.data?.categories.map((name, index) => (
              <List key={index}>
                <NavListMenu title={name.category_description.name} />
              </List>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
