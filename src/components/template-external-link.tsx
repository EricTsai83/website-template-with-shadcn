import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  pathname: string;
  isScrolling: boolean;
  width: number;
  height: number;
};

export default function TemplateExternalLink({
  pathname,
  isScrolling,
  width,
  height,
}: Props) {
  return (
    <a
      href="#"
      target="_blank"
      className={cn(
        "bg-white/80 hover:bg-white rounded-md flex justify-center items-center gap-1 px-4 py-2",
        {
          "hover:bg-black/5 bg-transparent": isScrolling || pathname !== "/",
        },
      )}
    >
      <Image src="/logo.svg" alt="logo" width={width} height={height} />
      <ExternalLink className="ml-1 w-4 h-4 text-slate-800" />
    </a>
  );
}
