import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function AuthorInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 text-muted-foreground">
        <Image
          src="/fee-icon.svg"
          alt="Author Avatar"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="font-medium">
            <span className="bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
              Dev Team
            </span>
          </p>
          <p className="text-sm text-left">July 1, 2024</p>
        </div>
      </div>
      <Separator className="" />
    </div>
  );
}
