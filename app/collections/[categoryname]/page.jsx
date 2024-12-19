
'use client'
import { useState } from "react";
import Cards from "@/app/components/productComponents/Cards";
import Sidebar from "@/app/components/productComponents/SideMenue";
import HeadingPart from "@/app/components/productComponents/HeadingPart";
import Pagination from "@/app/components/productComponents/Paignation";

export default function Home() {
  const [pageHeight, setPageHeight] = useState(null);

  window.addEventListener("scroll", () => {
    setPageHeight(window.scrollY);
    console.log(pageHeight); 
  });


  return (
    <div className="mt-[10em]">category name page</div>
    // <div className="w-full">
    //   <HeadingPart/>
    //   <div
    //     className={
    //       pageHeight < 6500 
    //         ? `hidden lg:block lg:shadow-none shadow-none  fixed w-[275px]  h-max left-0`
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
  );
}
