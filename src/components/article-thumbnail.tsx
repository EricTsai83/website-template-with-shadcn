import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

type ArticleInfo = {
  page: string;
  imageSrc: string;
  imageDesc: string;
  postTitle: string;
  postDesc: string;
  artist: string;
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  articleInfo: ArticleInfo;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function ArticleThumbnail({
  articleInfo,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: Props) {
  return (
    <Link href={articleInfo.page} className="cursor-pointer">
      <Card>
        <CardContent className="flex items-center justify-center p-0">
          <div className={cn("overflow-hidden rounded-t-md")} {...props}>
            <Image
              src={articleInfo.imageSrc}
              alt={articleInfo.postTitle}
              width={465}
              height={465}
              className={cn(
                "h-auto w-full object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[4/3]" : "aspect-square",
              )}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-1 text-sm pt-3 bg-secondary">
          <h3 className="w-full font-medium leading-none overflow-hidden truncate">
            {articleInfo.postTitle}
          </h3>
          <p className="text-xs text-muted-foreground">{articleInfo.artist}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
