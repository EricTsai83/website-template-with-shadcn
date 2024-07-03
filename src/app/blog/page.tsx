import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
export default function Page() {
  return (
    <PageContainer className="flex flex-col items-center">
      <h2 className="scroll-m-20 text-5xl font-medium tracking-tight lg:text-5xl">
        Blog
      </h2>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8">
            <div className="grid gap-2">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Latest Articles
              </h3>
              <p className="text-muted-foreground max-w-[800px]">
                Explore our latest insights and news on the topics that matter
                most.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {posts.map((post) => (
                <div
                  key={post.page}
                  className="group relative overflow-hidden md:flex"
                >
                  <Link
                    href={post.page}
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">Read more</span>
                  </Link>
                  <div className="w-full md:w-96 md:min-w-96">
                    <Image
                      src={post.imageSrc}
                      alt={post.imageDesc}
                      width={384}
                      height={250}
                      className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity rounded-2xl"
                      quality={100}
                      priority={true}
                    />
                  </div>

                  <div className="p-4 relative">
                    <h3 className="font-semibold text-lg md:text-xl">
                      {post.postTitle}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.postDesc}
                    </p>
                    <div className="w-full flex justify-end md:absolute md:bottom-4 md:right-3">
                      <Button variant="link" size="sm" className="mt-2">
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
