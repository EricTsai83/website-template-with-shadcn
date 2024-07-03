import { Suspense } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Video() {
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
      <AspectRatio
        ratio={16 / 9}
        className="bg-indigo-300 cursor-pointer  bg-gradient-to-tr from-purple-400 to-indigo-700"
      >
        <Suspense fallback={<p>Loading video...</p>}>
          <VideoComponent />
        </Suspense>
      </AspectRatio>
    </div>
  );
}

export async function VideoComponent() {
  return (
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/reUZRyXxUs4?si=YhQk9Ew52IBWLUMh"
      allowFullScreen
    />
  );
}
