'use client'
import { useEffect, useState } from "react";
import HeadingPart from "@/app/components/productComponents/HeadingPart";
import Pagination from "@/app/components/productComponents/Paignation";
import SideMenue from "@/app/components/categoryNameComponents/SideMenue";
import Cards from "@/app/components/categoryNameComponents/Cards";
import RecentlyViewed from "@/app/components/categoryNameComponents/RecentlyViewed";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "@/app/redux-system/slices/categoryProductsSlice";

export default function Home() {
  const {categoryDataProducts} = useSelector(state => state.categoryProductsData);
  console.log(categoryDataProducts?.productsList);
  
  const [pageHeight, setPageHeight] = useState(null);

  window.addEventListener("scroll", () => {
    setPageHeight(window.scrollY);
    console.log(pageHeight); 
  });

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategoryProducts());
  },[])


  return (
    // <div className="w-full mt-[15em]">
    //   <HeadingPart/>
    //   <div
    //     className={
    //       pageHeight < 6500 
    //         ? hidden lg:block lg:shadow-none shadow-none  fixed w-[275px]  h-max left-0
    //         : "hidden lg:block lg:shadow-none shadow-none w-[275px] left-0 "
    //     }
    //   >
    //     <Sidebar/>
    //   </div>

    //   <div className="flex flex-col justify-evenly lg:justify-end md:flex-row mt-4 w-full">

    //     {/* cards */}
    //     <div className="w-full md:w-3/4">
    //       <div className="p-4">
    //         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //           <Cards />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <Pagination/>

    //   <hr className="text-black"/>

    // </div>
    <div className="mt-[12em] w-full flex flex-col mb-[2em]">
      <HeadingPart/>
      <div className="w-full mt-[3em] flex gap-[3em] px-3 py-2">
        <SideMenue/>
        <Cards products={categoryDataProducts?.productsList}/>
      </div>
      <Pagination/>
      <hr className="w-full mt-4"/>
      <RecentlyViewed/>
    </div>
 
  );
}