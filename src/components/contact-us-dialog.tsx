import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function ContactUsDialog({ children }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogClose className="absolute left-1/2 transform -translate-x-1/2 -top-16 text-white">
          <X className="h-12 w-12 rounded-full bg-white/20 p-1 text-white hover:scale-110" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle>Do you need more information?</DialogTitle>
          <DialogDescription>
            Please contact{" "}
            <a
              href="mailto:nobody@gmail.com"
              className="underline hover:font-bold text-primary"
            >
              xyz@gmail.com
            </a>{" "}
            for further details.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
