'use client'
import React from "react";
import LayoutCart from "../components/layout/LayoutCart";
import CartHeader from "../components/CartHeader";
import { Button } from "@material-tailwind/react";

const page = () => {
  return (
    <LayoutCart>
      <CartHeader/>
      <div className="flex flex-col w-full justify-center items-center h-screen gap-[1em]">
        <h1 className="text-xl font-thin">Your cart is empty</h1>
        <p className="text-[#595959]">Spend 200 KD more and get free shipping!</p>
        <Button className="text-white tracking-widest	text-md font-thin rounded-none">SHOP OUR PRODUCTS</Button>
      </div>
      <hr className="w-full"/>
      <div>
        <h1>Recently viewed</h1>
        
      </div>

      {/* shwon when there is any products added */}
      {/* <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-[10em]">
        <h2 className="text-2xl font-semibold text-center mb-4 tracking-widest">
          CART
        </h2>
        <p className="text-gray-500 text-center mb-6">
          You are eligible for free shipping!
        </p>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/120x150" // صورة المنتج
              alt="Product"
              className="w-28 h-auto object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="text-gray-800 font-medium mb-1">
                CHANDELIER 105 CRYSTAL-EMBELLISHED SAND…
              </h3>
              <p className="text-gray-500 text-sm">IVORY / EU 36.5</p>
              <p className="text-gray-500 text-sm mt-2">510 KD</p>
            </div>
          </div>

          <div className="flex items-center">
            <button className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">
              –
            </button>
            <span className="px-4">1</span>
            <button className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">
              +
            </button>
          </div>

          <p className="text-gray-800 font-semibold">510 KD</p>
        </div>

        <div className="flex justify-end items-center mt-4 space-x-8">
          <button className="text-gray-500 hover:underline">REMOVE</button>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            CHECKOUT
          </button>
        </div>
      </div> */}
       

    </LayoutCart>
  );
};

export default page;
