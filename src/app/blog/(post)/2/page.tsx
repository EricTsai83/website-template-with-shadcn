import PageContainer from "@/components/page-container";
import AuthorInfo from "@/components/author-info";
import PostNav from "@/components/post-nav";
import ZoomableImage from "@/components/zoomable-image";
import { ArrowRightIcon } from "lucide-react";

export default function Page() {
  return (
    <PageContainer className="flex flex-col items-start max-w-[800px] space-y-12">
      <div className="w-full text-center space-y-10">
        <h2 className="scroll-m-20 text-4xl font-medium lg:text-5xl tracking-tight">
          Template Introduction 2
        </h2>
        <AuthorInfo />
      </div>

      <div className="space-y-6">
        <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
          Lorem, ipsum
        </h3>
        <ul className="list-decimal list-inside space-y-3 text-lg">
          <li>
            <span className="align-middle">Lorem ipsum dolor sit amet</span>
          </li>

          <li>
            <span className="align-middle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              atque?
            </span>
          </li>
          <li>
            <span className="align-middle">Lorem, ipsum</span>
          </li>
        </ul>
      </div>

      <p className="text-xl leading-8 italic text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        dignissimos.
      </p>

      <div className="space-y-10">
        <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
        </h3>

        <div className="space-y-3">
          <h4 className="text-xl lg:text-2xl font-semibold">
            Lorem, ipsum dolor
          </h4>

          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <span className="align-middle">
                Lorem ipsum dolor sit.{" "}
                <ArrowRightIcon className="inline-block" /> Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </span>
            </li>
            <li>
              <span className="align-middle">
                Lorem ipsum dolor sit amet consectetur.{" "}
                <ArrowRightIcon className="inline-block" /> Lorem ipsum dolor
                sit amet.
              </span>
            </li>
            <li>
              <span className="align-middle">
                Lorem ipsum dolor sit amet consectetur.{" "}
                <ArrowRightIcon className="inline-block" /> ipsum dolor sit amet
                consectetur.
              </span>
            </li>
          </ul>
        </div>

        <ZoomableImage
          className="w-full rounded-md cursor-pointer py-5"
          src="/image/image-3.jpg"
          alt=""
          width={736}
          height={473}
        />

        <div>
          <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
            Lorem ipsum
          </h3>

          <ZoomableImage
            className="w-full rounded-md cursor-pointer py-5"
            src="/image/image-4.jpg"
            alt=""
            width={736}
            height={472.77}
          />
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nobis ipsa minima ut mollitia veritatis ab illo fugit.
          </h4>
          <ul className="list-decimal list-inside space-y-3 text-lg leading-8">
            <li>
              <span className="align-middle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                at ad distinctio assumenda dolorem, commodi nihil placeat
                molestiae obcaecati velit eum dolores! Eos, dolore quod. Quos
                molestiae laudantium nihil quam.
              </span>
            </li>
            <li>
              <span className="align-middle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente dolores fugiat dolore illum odit, inventore ratione
                labore voluptate amet quos, quod quam veniam incidunt expedita?
              </span>
            </li>
            <li>
              <span className="align-middle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                architecto eos possimus inventore voluptates pariatur
                necessitatibus soluta, facere ab, sunt in. Fuga neque molestiae
                fugiat!
              </span>
            </li>
          </ul>
        </div>
      </div>
      <PostNav className="pt-16" prev="/blog/1" next="/blog/3" />
    </PageContainer>
  );
}
