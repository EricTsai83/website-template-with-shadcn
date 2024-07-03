"use client";

import { NavigationMenu } from "@/components/navigation-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Popover } from "@/components/popover";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TemplateExternalLink from "@/components/template-external-link";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 z-50 border-0 w-full flex justify-between items-center h-[72px] bg-transparent px-6",
        {
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85":
            isScrolling || pathname !== "/",
        },
      )}
    >
      <h1>
        <Link href="/">
          <Image
            src={isScrolling || pathname !== "/" ? "/logo.svg" : "/logo.svg"}
            alt="logo"
            width={100}
            height={72}
          />
        </Link>
      </h1>
      <NavigationMenu
        className={cn("hidden lg:flex text-white", {
          "text-black": isScrolling || pathname !== "/",
        })}
        isScrolling={isScrolling}
        pathname={pathname}
      />
      <div className="hidden items-center lg:flex lg:justify-end w-[100px]">
        <TemplateExternalLink
          pathname={pathname}
          isScrolling={isScrolling}
          width={58}
          height={14.41}
        />
      </div>
      <Popover
        className="lg:hidden"
        isScrolling={isScrolling}
        pathname={pathname}
      />
    </div>
  );
}
