'use client'
import { useState } from "react";

const ImagesSlider = () => {
  const cards = Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    title: `RENE `,
    mainPrice: 362.0,
    afterDiscount: 217.0,
    image: "https://cdn.shopify.com/s/files/1/0521/9926/0341/products/CE0124_20AX191_2080999_20B_600x.jpg?v=1680696656",
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 4 < cards.length) {
      setCurrentIndex(currentIndex + 4);
    } else {
      setCurrentIndex(0); 
    }
  };

  const prevSlide = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    } else {
      setCurrentIndex(cards.length - 4);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-[3em]">
      <div className="flex items-center justify-between">
        {/* زر "السابق" */}
        <button
          className="bg-white shadow-md bg-opacity-50 text-black p-3 rounded-full w-[50px] h-[50px]"
          onClick={prevSlide}
        >
          {"<"}
        </button>

        {/* الكاردات */}
        <div className="flex space-x-4 overflow-hidden w-full">
          {cards.slice(currentIndex, currentIndex + 4).map((card) => (
            <div key={card.id} className="w-1/4 p-2">
              <div className="border-none rounded-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-md">{card.title}</h3>
                  <p className="text-sm font-thin text-red-600">{`$${card.afterDiscount}`}</p>
                  <p className="text-sm font-thin line-through">{`$${card.mainPrice}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* زر "التالي" */}
        <button
          className="bg-white shadow-md bg-opacity-50 text-black p-3 rounded-full w-[50px] h-[50px]"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;


