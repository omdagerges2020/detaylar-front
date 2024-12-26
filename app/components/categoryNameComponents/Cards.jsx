import Link from "next/link";
import React from "react";

const Cards = ({products}) => {
  console.log(products);
  // console.log(categoryName);

  // console.log(categoryID);
  
  // const cards = Array.from({ length: 48 }, (_, index) => ({
  //   id: index + 1,
  //   title: `RENE CAOVILLENA`,
  //   kind: "BOWS SANDLE",
  //   description: "105 - CRYSTAL",
  //   mainPrice: 362.0,
  //   afterDiscount: 217.0,
  //   images: {
  //     main: "https://cdn.shopify.com/s/files/1/0521/9926/0341/products/CE0124_20AX191_2080999_20B_600x.jpg?v=1680696656",
  //     hover:
  //       "https://cdn.shopify.com/s/files/1/0521/9926/0341/products/CE0124_20AX191_2080999_600x.jpg?v=1680696656",
  //   },
  // }));
  return (
    <div className="w-full flex justify-center lg:w-[calc(100% - 300px)]">
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-[2em] overscroll-none lg:overflow-y-scroll lg:h-[70vh]"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {products?.data?.map((card) => (
          <Link
            href={`/collections/${card.model}/${card.id}`}
            key={card.id}
            className="card w-[180px] md:w-[350px] lg:w-[230px] bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${card.image}`}
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg"
              />
              {/* <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${card.product_image[0]?.image.replace(/ /g, "%20")}`}
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              /> */}
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">{card.model}</p>
              <p className="text-gray-600">{card.product_description.name}</p>
              {/* <p className="text-gray-600">{card.kind}</p> */}
              <div>
                <span className="text-gray-600">{card.price}</span>
                <span className="text-red-500">{card.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
