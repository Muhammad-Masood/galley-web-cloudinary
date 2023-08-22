import banners from "../../public/banners";
import { Carousel } from "@/components/Carousel";

export default async function Home() {

  return (
    <div className="max-w-[2000px] m-auto mt-4">
      <Carousel/>
    </div>
  );
}
