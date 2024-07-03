import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
};

export default function ZoomableImage({
  src,
  alt,
  className,
  width,
  height,
  sizes,
}: Props) {
  if (!src) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          alt={alt || ""}
          // sizes="600px"
          className={className}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={width}
          height={height}
        />
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-none bg-transparent p-0 shadow-none">
        <DialogClose className="absolute left-1/2 transform -translate-x-1/2 -top-16 text-white focus:outline-none">
          <X className="h-12 w-12 rounded-full bg-white/20 p-1 text-white hover:scale-110" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent">
          <Image
            src={src}
            fill
            alt={alt || ""}
            className="h-full w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
