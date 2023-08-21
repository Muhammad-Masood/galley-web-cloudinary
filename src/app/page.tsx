import Image from "next/image";
import banners from "../../public/banners";
import { Slider } from "@/components/Carousel";

export default async function Home() {

  return (
    <div className="max-w-5xl m-auto">
      <Slider/>
    </div>
  );
}
