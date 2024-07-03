import PageContainer from "@/components/page-container";
import AuthorInfo from "@/components/author-info";
import PostNav from "@/components/post-nav";
import ZoomableImage from "@/components/zoomable-image";

export default function Page() {
  return (
    <PageContainer className="flex flex-col items-start max-w-[800px] space-y-12">
      <div className="w-full text-center space-y-10">
        <h2 className="scroll-m-20 text-4xl font-medium lg:text-5xl tracking-tight">
          Template Introduction 3
        </h2>
        <AuthorInfo />
      </div>
      <p className="text-xl text-muted-foreground leading-8 italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, excepturi?
        Assumenda iste similique praesentium magnam.{" "}
        <span className="not-italic">😄</span>
      </p>

      <div className="space-y-10">
        <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
          lorem
        </h3>

        <div className="flex flex-col justify-center space-y-6">
          <ZoomableImage
            className="w-full rounded-md cursor-pointer"
            src="/image/image-5.jpg"
            alt=""
            width={736}
            height={478.89}
          />

          <p className="text-lg leading-8 pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            doloremque est quaerat praesentium sequi corporis fuga magni
            repellat. Repudiandae aperiam animi natus at iusto sint.
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
          Lorem
        </h3>

        <div className="flex flex-col justify-center space-y-6">
          <ZoomableImage
            className="w-full rounded-md cursor-pointer"
            src="/image/image-6.jpg"
            alt=""
            width={736}
            height={478.89}
          />

          <p className="text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            laudantium qui porro. Magnam quia saepe ab, enim totam architecto
            amet maiores dolore eum aut nihil, dolorum, quae laborum debitis
            ipsum.
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
          Pre-check
        </h3>

        <div className="flex flex-col justify-center space-y-6">
          <div>
            <ZoomableImage
              className="w-full rounded-md cursor-pointer"
              src="/image/image-7.jpg"
              alt=""
              width={736}
              height={478.89}
            />
          </div>

          <p className="text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            eum excepturi non nisi soluta quis eaque aut voluptatem eveniet eos
            dolorem sed, vero fugit et earum hic voluptates iste a aliquam
            officiis molestias ad assumenda cupiditate! Magni dicta repellendus
            quis!
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
          Lorem, ipsum dolor
        </h3>

        <div className="flex flex-col justify-center space-y-6">
          <ZoomableImage
            className="w-full rounded-md cursor-pointer"
            src="/image/image-8.jpg"
            alt=""
            width={736}
            height={478.89}
          />
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Lorem ipsum</h4>

            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                <span className="align-middle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis, in. Voluptas commodi, eaque doloribus, nesciunt
                  tenetur ipsam fugit, ipsum non nobis illo culpa cum
                  reiciendis.
                </span>
              </li>
              <li>
                <span className="align-middle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  molestias facilis illum fugit unde consequatur dolorum
                  laboriosam. Omnis aliquid dignissimos non sint. Dolor iusto
                  eaque eligendi saepe suscipit facilis, placeat iste debitis
                  ducimus maiores facere?
                </span>
              </li>
              <li>
                <span className="align-middle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  consequuntur sunt ex tempore eos incidunt autem rerum
                  asperiores, suscipit natus repellat officiis a quasi quos
                  obcaecati sapiente quis cupiditate? Nisi sint asperiores rerum
                  soluta illo neque quos quae eveniet corrupti!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PostNav className="pt-16" prev="/blog/2" />
    </PageContainer>
  );
}
