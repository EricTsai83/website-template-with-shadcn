import Link from "next/link";
import Image from "next/image";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";

export default function Footer() {
  const navigation = [
    { name: "Home", url: "/" },
    { name: "Video", url: "/video?workshop=A" },
    { name: "Blog", url: "/blog" },
  ];
  const legal = [
    { name: "English", url: "/terms/en" },
    { name: "中文", url: "/terms/zh-tw" },
  ];
  return (
    <div className="bg-secondary px-10 mt-36 pt-14">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 mx-auto border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100"
            >
              <Image src="/logo.svg" width={100} height={72} alt="logo" />
            </Link>
          </div>

          <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            at aspernatur neque iusto doloremque voluptatibus veniam a voluptate
            sequi harum?
          </div>
        </div>

        <div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            <p className="font-medium">Navigation</p>
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.url}
                className="w-full px-3 py-2 text-muted-foreground rounded-md dark:text-gray-300 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            <p className="font-medium">Terms & conditions</p>
            {legal.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="w-full px-3 py-2 text-muted-foreground rounded-md dark:text-gray-300 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="-mt-2">
          <p className="font-medium">Follow us</p>
          <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
            <a href="https://www.facebook.com" target="_blank" rel="noopener">
              <span className="sr-only">Facebook</span>
              <div className="w-6 h-6 hover:scale-110">
                <Image src={facebook} alt="Taiwan mobile's facebook" />
              </div>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener">
              <span className="sr-only">Instagram</span>
              <div className="w-6 h-6 hover:scale-110">
                <Image src={instagram} alt="Taiwan mobile's instagram" />
              </div>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener">
              <span className="sr-only">Linkedin</span>

              <div className="w-6 h-6 hover:scale-110">
                <Image src={linkedin} alt="Taiwan mobile's linkedin" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="py-10 text-sm text-center text-gray-600">
        Copyright © {new Date().getFullYear()}. Made by{" "}
        <a
          className="inline-flex align-top"
          href="#"
          target="_blank"
          rel="noopener"
        >
          dev team.
        </a>
      </div>
    </div>
  );
}
