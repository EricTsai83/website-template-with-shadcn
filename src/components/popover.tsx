"use client";

import { Button } from "@/components/ui/button";

import {
  Popover as PopoverWrapper,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { House, Menu, NotebookText, TvMinimalPlay } from "lucide-react";
import Link from "next/link";
import TemplateExternalLink from "@/components/template-external-link";
import { useState } from "react";

type Props = {
  className?: string;
  isScrolling: boolean;
  pathname: string;
};

export function Popover({ className, isScrolling, pathname }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(className, "")}>
      <PopoverWrapper open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn("p-2 hover:bg-white/20", {
              "hover:bg-black/10": isScrolling || pathname !== "/",
            })}
          >
            <Menu
              className={cn("text-white", {
                "text-black": isScrolling || pathname !== "/",
              })}
            />
            {/* <X /> */}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="end"
          sideOffset={25}
          className="w-[calc(100vw-48px)]" // w-[calc(100vw-2.5rem)]
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          {/* <PopoverClose asChild className="absolute top-4 right-4">
            <Button variant="ghost">
              <X />
            </Button>
          </PopoverClose> */}
          <div className="grid w-full">
            <Link
              className="space-y-2 hover:bg-gray-100 px-5 py-3"
              href="/"
              onClick={() => setOpen(false)}
            >
              <h4 className="flex items-center font-medium leading-none">
                <House className="mr-2" /> Template 1
              </h4>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </Link>
            <Link
              className="space-y-2 hover:bg-gray-100 px-5 py-3"
              href="/video?workshop=A"
              onClick={() => setOpen(false)}
            >
              <h4 className="flex items-center font-medium leading-none">
                <TvMinimalPlay className="mr-2" /> Template 2
              </h4>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Link>
            <Link
              className="space-y-2 hover:bg-gray-100 px-5 py-3"
              href="/blog"
              onClick={() => setOpen(false)}
            >
              <h4 className="flex items-center font-medium leading-none">
                <NotebookText className="mr-2" /> Template 3
              </h4>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </p>
            </Link>
          </div>
          <TemplateExternalLink
            pathname={pathname}
            isScrolling={isScrolling}
            width={80}
            height={19.88}
          />
        </PopoverContent>
      </PopoverWrapper>
    </div>
  );
}
