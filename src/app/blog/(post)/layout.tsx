import PostNav from "@/components/post-nav";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex justify-center w-full">{children}</div>;
}
