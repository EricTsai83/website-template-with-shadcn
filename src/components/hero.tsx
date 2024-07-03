import DecodingHoverEffectText from "@/components/decoding-hover-effect-text";
import ScrollButton from "@/components/scroll-button";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/hero.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/40" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-8">
            Aug. 5th @ online
          </h3>
          <h2>
            <DecodingHoverEffectText
              text="Welcome to my website template"
              className="inline-block text-4xl lg:text-6xl font-bold lg:max-w-3xl mb-2 uppercase"
            />
          </h2>

          <h4 className="text-lg lg:text-2xl font-semibold mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl">
            I aim to deliver innovative and seamless solutions for your web
            needs
          </h4>

          <ScrollButton
            text="Watch more"
            targetId="introduction"
            offset={164} // 92+72 128+72
          />
        </div>
      </div>

      <a
        className="text-muted-foreground absolute bottom-3 right-3"
        href="https://www.freepik.com/free-photo/glowing-molecular-structure-futuristic-galaxy-backdrop-generated-by-ai_41667331.htm"
      >
        Image by vecstock on Freepik
      </a>
    </div>
  );
}
