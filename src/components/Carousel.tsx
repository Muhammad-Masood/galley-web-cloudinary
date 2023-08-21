'use client';
import { useEffect, useState } from "react";
import banners from "../../public/banners";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';

export function Slider() {
  const [index, setIndex] = useState(0);
  const duration = 4000;
  const prev = () => {
    index===0?setIndex(banners.length-1):setIndex(index-1);
  };

  const next = () => {
    index===banners.length-1?setIndex(0):setIndex(index+1);
  };

  useEffect(()=>{
    const slide = setInterval(next,duration);
    return () => clearInterval(slide);
  },[index]);

  return (
    <div className="overflow-hidden relative items-center ">
      <div className="flex transition-transform ease-out duration-500 relative">
      <img src={banners[index].path} alt="banner" className="opacity-30 blur-sm"/>
      <div className="absolute h-full  items-center flex flex-col justify-center gap-y-4">
      <h2 className="text-4xl font-semibold">{banners[index].heading}</h2>
      <p className="tracking-wide font-mono text-slate-200 px-24">{banners[index].para}</p>
      </div>
      </div>
      <div className="absolute top-0 p-4 h-full w-full items-center flex justify-between ">
        <button onClick={prev}>
          <BiChevronLeft className="w-7 h-7 text-slate-200" />
        </button>
        <button onClick={next}>
          <BiChevronRight className="w-7 h-7 text-slate-200" />
        </button>
      </div>
    </div>
  );
}
