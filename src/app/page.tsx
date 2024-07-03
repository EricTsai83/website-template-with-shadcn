import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import WorkshopInfo from "@/components/workshop-info";
import Video from "@/components/video";
import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <>
      <div className="space-y-24 lg:space-y-32">
        <Hero />
        <Introduction />
        <WorkshopInfo />
        <Video />
        <Carousel />
      </div>
    </>
  );
}
