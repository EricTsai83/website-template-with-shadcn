import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
  prev?: string;
  next?: string;
};

export default function PostNav({ className, prev, next }: Props) {
  return (
    <div className={cn("flex justify-between w-full", className)}>
      {prev ? (
        <Link
          href={prev}
          className="group w-28 md:w-40 flex justify-center items-center rounded-lg bg-transparent md:bg-secondary-foreground px-4 py-2 text-sm font-medium text-black md:text-white md:shadow transition-colors md:hover:bg-secondary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12"
          prefetch={false}
        >
          <div className="flex justify-between items-center w-full max-w-16">
            <ArrowLeftIcon className="mr-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:-translate-x-3" />
            <span className="text-lg font-medium">Prev</span>
          </div>
        </Link>
      ) : (
        <span className="w-28 md:w-40"> </span>
      )}
      {next ? (
        <Link
          href={next}
          className="group w-28 md:w-40 flex justify-center items-center rounded-lg bg-transparent md:bg-secondary-foreground px-4 py-2 text-sm font-medium text-black md:text-white md:shadow transition-colors md:hover:bg-secondary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12"
          prefetch={false}
        >
          <div className="flex justify-between items-center w-full max-w-16">
            <span className="text-lg font-medium">Next</span>
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-3" />
          </div>
        </Link>
      ) : (
        <span className="w-28 md:w-40"> </span>
      )}
    </div>
  );
}
