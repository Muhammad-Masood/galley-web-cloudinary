'use client';
import { useEffect, useState } from "react";
import banners from "../../public/banners";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import Image from "next/image";

export function Carousel() {
  const [index, setIndex] = useState(0);
  const [isChanging,setIsChanging] = useState(false);
  const duration = 4000;
  const prev = () => {
    setTimeout(() => {
      index===0?setIndex(banners.length-1):setIndex(index-1);
      setIsChanging(false);
    },500);
    setIsChanging(true);
  };

  const next = () => {
    setTimeout(() => {
      index===banners.length-1?setIndex(0):setIndex(index+1);
      setIsChanging(false);
    },400);
    setIsChanging(true);
  };

  useEffect(()=>{
    const slide = setInterval(next,duration);
    return () => clearInterval(slide);
  });

  return (
    <div className="overflow-hidden relative items-center ">
      <div className={`flex relative transform ease-out duration-300 ${isChanging? "opacity-0" : "opacity-100"} transition-opacity`}>
      <Image src={banners[index].path} alt="banner" className="opacity-30 blur-sm" width={1200} height={600}/>
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
