"use client";

import { useEffect, useState } from "react";
import {
  Carousel as CarouselWrapper,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArticleThumbnail } from "@/components/article-thumbnail";

import { posts } from "@/data/posts";

export function Carousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      <CarouselWrapper
        setApi={setApi}
        className="w-8/12"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <ArticleThumbnail
                articleInfo={post}
                width={597}
                height={398}
                aspectRatio="portrait" // "portrait" | "square"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselWrapper>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Article {current} of {count}
      </div>
    </div>
  );
}
