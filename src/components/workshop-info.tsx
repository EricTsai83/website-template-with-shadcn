import { Button } from "@/components/ui/button";
import Link from "next/link";
import WarningCard from "@/components/warning-card";
import ZoomableImage from "@/components/zoomable-image";
import ContactUsDialog from "@/components/contact-us-dialog";

export default function WorkshopInfo() {
  return (
    <>
      <div className="container space-y-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-5xl">
              Conference
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              nulla nisi rem voluptatem quae corrupti beatae quis ex sed
              dolores.
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link href="/video?workshop=A">
                <Button size={"lg"}>Watch now</Button>
              </Link>
              <ContactUsDialog>
                <Button variant={"outline"} size={"lg"}>
                  Contact sales team
                </Button>
              </ContactUsDialog>
            </div>
            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
              <div className="py-5">
                <p className="font-semibold">Conference A</p>
                <p className="mt-3 text-sm">
                  Aug. 5th, from 14:00 to 18:00 (GMT+8)
                </p>
                <p className="mt-5 text-sm">
                  Founder@DeepLearning.AI, Andrew Ng
                </p>
                <p className="mt-2 text-sm">CEO@Landing AI, Andrew Ng</p>
              </div>
              <div className="py-5">
                <p className="font-semibold">Conference B</p>
                <p className="mt-3 text-sm">
                  May 5th, from 16:00 to 20:30 (GMT+8)
                </p>
                <p className="mt-5 text-sm">
                  Founder@DeepLearning.AI, Andrew Ng
                </p>
                <p className="mt-2 text-sm">CEO@Landing AI, Andrew Ng</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <ZoomableImage
              className="w-full rounded-md cursor-pointer"
              src="/image/poster.avif"
              alt=""
              width={1080}
              height={1276}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <WarningCard />
        </div>
      </div>
    </>
  );
}
