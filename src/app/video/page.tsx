"use client";

import PageContainer from "@/components/page-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function SuspensePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
}

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const videoSrc = {
  templateA: [
    {
      title: "Template A - lorem ipsum dolor",
      subtitle: "Speaker: orem ipsum dolor",
      src: "https://www.youtube.com/embed/-mIjwN1o7nE?si=yVvNDmiQ6-jkC9RK",
    },
    {
      title: "Template A - orem ipsum dolor",
      subtitle: "Speaker: orem ipsum dolor",
      src: "https://www.youtube.com/embed/q1XFm21I-VQ?si=45oJr9h99zIFbBZt",
    },
    {
      title: "Template A -orem ipsum dolor",
      subtitle: "Speaker: orem ipsum dolor",
      src: "https://www.youtube.com/embed/1k37OcjH7BM?si=ammdlSc_BTb2YRPW",
    },
    {
      title: "Template A - orem ipsum dolor",
      subtitle: "Speaker: orem ipsum dolor",
      src: "https://www.youtube.com/embed/uLL6RZhoj3o?si=us7cTARWntfhwhj9",
    },
  ],
  templateB: [
    {
      title: "Workshop B - Opening Remarks",
      subtitle: "Speaker: orem ipsum dolor",
      src: "https://www.youtube.com/embed/5p248yoa3oE?si=KZzX6dNpBqZqjPOB",
    },
  ],
};

function Page() {
  const searchParams = useSearchParams();
  const workshop = searchParams.get("workshop");
  const router = useRouter();

  // State to manage loading status of videos for each workshop
  const [loadingStatusA, setLoadingStatusA] = useState(
    videoSrc.templateA.map(() => true),
  );
  const [loadingStatusB, setLoadingStatusB] = useState(
    videoSrc.templateB.map(() => true),
  );

  function handleReadyA(index: number) {
    const updatedStatus = [...loadingStatusA];
    updatedStatus[index] = false;
    setLoadingStatusA(updatedStatus);
  }

  function handleReadyB(index: number) {
    const updatedStatus = [...loadingStatusB];
    updatedStatus[index] = false;
    setLoadingStatusB(updatedStatus);
  }

  return (
    <PageContainer className="flex flex-col items-center">
      <h2 className="scroll-m-20 text-5xl font-medium tracking-tight lg:text-5xl">
        Template Videos
      </h2>
      <p className="mt-3 text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Tabs
        defaultValue={`${workshop}`}
        className="w-full max-w-[1200px] mt-16"
      >
        <TabsList className="mb-6">
          <TabsTrigger value="A" onClick={() => router.push("?workshop=A")}>
            Template A
          </TabsTrigger>
          <TabsTrigger value="B" onClick={() => router.push("?workshop=B")}>
            Template B
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="A"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-0"
        >
          {videoSrc.templateA.map((video, index) => (
            <div key={video.title} className="space-y-3">
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                {loadingStatusA[index] && (
                  <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                    Loading...
                  </div>
                )}
                <ReactPlayer
                  url={video.src}
                  controls
                  width="100%"
                  height="100%"
                  onReady={() => handleReadyA(index)}
                  className="absolute top-0 left-0"
                />
              </div>
              <div className="w-full px-3">
                <p className="font-semibold">{video.title}</p>
                <p className="">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent
          value="B"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-0"
        >
          {videoSrc.templateB.map((video, index) => (
            <div key={video.title} className="space-y-3">
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                {loadingStatusB[index] && (
                  <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                    Loading...
                  </div>
                )}
                <ReactPlayer
                  url={video.src}
                  controls
                  width="100%"
                  height="100%"
                  onReady={() => handleReadyB(index)}
                  className="absolute top-0 left-0"
                />
              </div>
              <div className="w-full px-3">
                <p className="font-semibold">{video.title}</p>
                <p className="">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
