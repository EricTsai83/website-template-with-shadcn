import { cn } from "@/lib/utils";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="container mx-auto flex flex-col items-center px-4"
    >
      <h3 className="text-center text-3xl font-medium">
        Why ceate this{" "}
        <span
          className={cn(
            "relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text",
            "after:absolute after:-bottom-2 after:left-0 after:content-[''] after:w-full after:h-[15px] after:bg-[url('/underline.svg')] after:bg-center after:bg-cover after:bg-no-repeat",
          )}
        >
          template
        </span>
        ?
      </h3>
      <p className="mt-2 lg:max-w-4xl mb-8 w-full text-center text-xl font-normal text-muted-foreground leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae odit quis architecto perspiciatis atque enim similique
        distinctio id iure neque, dolorum sequi, autem necessitatibus iusto
        deserunt labore qui maxime vero? Error laudantium tempore minima?
      </p>
    </section>
  );
}
