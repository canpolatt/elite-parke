import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/autoplay";
import homeLaminant from "../images/home-laminant.png";
import homeDoors from "../images/home-doors.png";
import homeSkirts from "../images/products-skirts.png";
import homeLamine from "../images/home-lamine.png";

export default function Home() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="mt-28 md:mt-36">
      {/* Header */}
      <div className="mb-4 py-1 px-4">
      <Swiper
        autoplay={{
          delay: 3500,
        }}
      >
        <SwiperSlide>
          <div>
          <div className="bg-cover bg-center h-auto text-white  py-10 px-3 md:py-24 md:px-10 object-fill image1">
            <div className="flex flex-col w-1/2 items-center text-center">
              <h1 className="text-customText font-extrabold text-md mb-2 md:mb-6 md:text-4xl">
                Elite Parke ile konfor evinizde!
              </h1>
              <a
                href="/iletisim"
                className=" border border-black text-customText font-medium text-xs lg:font-semibold lg:text-lg md:py-2 md:px-4 py-1 px-2 rounded hover:bg-primary hover:text-white"
              >
                İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <div className="bg-cover bg-center  h-auto text-white  py-10 px-3 md:py-24 md:px-10 object-fill image2">
            <div className="flex flex-col w-1/2 items-center text-center">
              <h1 className="text-customText font-extrabold text-md mb-2 md:mb-6 md:text-4xl">
                Elite Parke ile kalite evinizde!
              </h1>
              <a
                href="/iletisim"
                className=" border border-black text-customText font-medium text-xs lg:font-semibold lg:text-lg md:py-2 md:px-4 py-1 px-2 rounded hover:bg-primary hover:text-white"
              >
                İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" ">
          <div className="bg-cover bg-center  h-auto text-white  py-10 px-3 md:py-24 md:px-10 object-fill image3">
            <div className="flex flex-col w-1/2 items-center text-center">
              <h1 className="text-customText font-extrabold text-md mb-2 md:mb-6 md:text-4xl">
                Elite Parke ile stil evinizde!
              </h1>
              <a
                href="/iletisim"
                className=" border border-black text-customText font-medium text-xs lg:font-semibold lg:text-lg md:py-2 md:px-4 py-1 px-2 rounded hover:bg-primary hover:text-white"
              >
                İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

      {/* Header end */}

      {/* Main */}
      <div className="grid grid-flow-row gap-y-4 px-10 md:px-28 md:mt-20 text-customText md:grid-cols-2 md:gap-20">
        <div className="home-card row relative md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Laminant
          </h4>
          <img
            src={homeLaminant}
            alt="laminant"
            className="w-full home-image"
          />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-light italic tracking-wide">
              “ Laminant parkeler ile yaşam alanınızı canlı bir görünüme
              kavuşturun.”<br/>-Elite Parke 
            </h3>
            <a
              className="border border-gray-700 bg-gray-700 py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/urunler/laminantlar"
            >
              Detay
            </a>
          </div>
        </div>
        <div className="home-card row relative md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Kapılar
          </h4>
          <img src={homeDoors} alt="doors" className="home-image" />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-light italic tracking-wide">
              “ Evinizi çelik kapılar ardında güvende tutun.”<br/>-Elite Parke 
            </h3>
            <a
              className="border border-gray-700 bg-gray-700 py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/urunler/kapilar"
            >
              Detay
            </a>
          </div>
        </div>
        <div className="home-card row relative md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Süpürgelik
          </h4>
          <img src={homeSkirts} alt="skirts" className="w-full home-image" />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-light italic tracking-wide">
              “ Süpürgelik ile parke kenarındaki kötü görüntüleri ortadan
              kaldırın.” <br/>-Elite Parke 
            </h3>
            <a
              className="border border-gray-700 bg-gray-700 py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/urunler/supurgelikler"
            >
              Detay
            </a>
          </div>
        </div>
        <div className="home-card row relative mb-10 md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Lamine
          </h4>
          <img src={homeLamine} alt="lamine" className="w-full home-image" />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-light italic tracking-wide">
              “ Uzun ömürlü ve dayanıklı Lamine parkeler sayesinde konforlu bir
              ortam sağlayın.” <br/>-Elite Parke 
            </h3>
            <a
              className="border border-gray-700 bg-gray-700 py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/urunler/lamineler"
            >
              Detay
            </a>
          </div>
        </div>
      </div>
      {/* Main end */}
    </div>
  );
}
