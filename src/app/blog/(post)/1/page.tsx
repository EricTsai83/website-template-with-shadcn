import PageContainer from "@/components/page-container";
import AuthorInfo from "@/components/author-info";
import PostNav from "@/components/post-nav";
import ZoomableImage from "@/components/zoomable-image";

export default function Page() {
  return (
    <PageContainer className="flex flex-col items-start max-w-[800px] space-y-12">
      <div className="w-full text-center space-y-10">
        <h2 className="scroll-m-20 text-4xl font-medium lg:text-5xl tracking-tight">
          Template Introduction 1
        </h2>
        <AuthorInfo />
      </div>
      <div>
        <p className="text-lg leading-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          magni a fuga deleniti aut, repellendus quibusdam ex sit animi fugiat
          quasi qui autem, delectus error cupiditate in enim unde iusto.
          Adipisci ut ab perspiciatis maiores ipsa voluptates veritatis nisi
          tenetur amet eaque fugiat, incidunt, corrupti a aliquid assumenda sit
          doloremque voluptas rem.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <ZoomableImage
            className="w-full rounded-md cursor-pointer p-6"
            src="/image/image-1.jpg"
            alt=""
            width={384}
            height={256}
          />

          <p className="text-lg leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            magni a fuga deleniti aut, repellendus quibusdam ex sit animi fugiat
            quasi qui autem, delectus error cupiditate in enim unde iusto.
            Adipisci ut ab perspiciatis maiores ipsa voluptates veritatis nisi
            tenetur amet eaque fugiat, incidunt.
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <h3 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </h3>

        <div className="space-y-3">
          <h4 className="text-xl lg:text-2xl font-semibold">
            Lorem ipsum dolor adipisicing elit
          </h4>

          <p className="text-lg leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            magni reiciendis commodi deserunt delectus! Quae, doloremque
            voluptas earum aspernatur in fuga recusandae consequuntur excepturi
            consequatur ut omnis magnam, maiores delectus, aut voluptatem
            laudantium repellat magni corporis sapiente corrupti ipsum vel
            quibusdam!
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl lg:text-2xl font-semibold">
            Lorem ipsum dolor sit
          </h4>
          <p className="text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            similique magnam, reprehenderit porro non quis sapiente aliquam
            molestias, placeat fugit autem perspiciatis at! Accusantium aliquid
            nesciunt sint tempora eaque, veritatis velit, temporibus quibusdam,
            debitis a asperiores reiciendis corporis sit tempore aliquam.
            Deserunt quia sed fuga in et, similique doloremque corporis
            accusamus blanditiis eveniet architecto laboriosam voluptatum,
            commodi fugiat a quasi qui sapiente aut doloribus. A inventore
            magnam minima debitis sequi perspiciatis sunt eveniet libero
            incidunt.
          </p>

          <ZoomableImage
            className="w-full rounded-md cursor-pointer py-5"
            src="/image/image-2.jpg"
            alt=""
            width={700}
            height={400}
          />
        </div>

        <div className="space-y-3">
          <h4 className="text-xl lg:text-2xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit Illum
          </h4>
          <p className="text-lg leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            aspernatur eius animi nam eligendi fuga hic velit temporibus
            voluptatum voluptatem sapiente ad itaque et accusamus. Iure sunt
            quidem velit debitis ut illo. Ducimus voluptates minima nesciunt
            voluptate quasi provident sapiente dolor ullam fugiat debitis.
            Quaerat debitis nobis ullam numquam illum architecto, harum quisquam
            ipsa consequuntur est. Perspiciatis iste asperiores ducimus.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-xl lg:text-2xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing
          </h4>
          <p className="text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            perspiciatis autem repellendus ipsa facere ex natus earum iste
            voluptatibus assumenda dolorum aliquid illum, architecto odio
            eligendi a doloribus, itaque accusantium voluptatem libero at vel?
            Suscipit nobis quia autem! Pariatur autem nulla libero reiciendis
            ullam sit!
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl lg:text-2xl font-semibold">
            Lorem ipsum dolor sit amet
          </h4>
          <p className="text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste id
            sit placeat? Hic natus aliquam impedit. Et praesentium accusamus
            asperiores ipsa assumenda tempora mollitia minus facere porro, iste
            qui illo dolore nobis quas itaque impedit possimus error!
          </p>
        </div>
      </div>
      <PostNav className="pt-16" next="/blog/2" />
    </PageContainer>
  );
}
