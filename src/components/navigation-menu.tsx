"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu as NavigationMenuWrapper,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const workshops: { title: string; href: string; description: string }[] = [
  {
    title: "Workshop A",
    href: "/video?workshop=A",
    description: "June 4th, from 22:00 to 23:30 (GMT+8)",
  },
  {
    title: "Workshop B",
    href: "/video?workshop=B",
    description: "June 5th, from 10:00 to 11:30 (GMT+8)",
  },
];

type Props = {
  className?: string;
  isScrolling: boolean;
  pathname: string;
};

export function NavigationMenu({ className, isScrolling, pathname }: Props) {
  return (
    <NavigationMenuWrapper className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <span
              className={cn(
                "w-32 h-10 rounded-md flex justify-center items-center font-semibold",
                "hover:bg-white/40",
                { "hover:bg-gray-100/50": isScrolling || pathname !== "/" },
              )}
            >
              Home
            </span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/video?workshop=A">
            <NavigationMenuTrigger
              className={cn(
                "w-32 h-10  rounded-md flex justify-center items-center bg-transparent font-semibold",
                "hover:bg-white/40 hover:text-white",
                {
                  "hover:text-black": isScrolling || pathname !== "/",
                },
              )}
            >
              <span className="text-base">Video</span>
            </NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[260px] gap-3 p-4 md:grid-cols-1 lg:w-[450px] ">
              {workshops.map((workshop) => (
                <ListItem
                  key={workshop.title}
                  title={workshop.title}
                  href={workshop.href} // 這個部分必須 hard code base path
                >
                  {workshop.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog">
            <span
              className={cn(
                "w-32 h-10 rounded-md flex justify-center items-center font-semibold",
                "hover:bg-white/40",
                { "hover:bg-gray-100/50": isScrolling || pathname !== "/" },
              )}
            >
              Blog
            </span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuWrapper>
  );
}

// function ListItem({ title, href, children }: any) {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           href={href}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//           )}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
