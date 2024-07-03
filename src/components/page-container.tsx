import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({ children, className }: Props) {
  return (
    <div
      className={cn(
        "px-8 py-12 mt-16 flex justify-center w-full bg-background",
        className,
      )}
    >
      {children}
    </div>
  );
}
