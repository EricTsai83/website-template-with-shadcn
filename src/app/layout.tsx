import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | template",
    default: "template", // a default is required when creating a template
  },
  authors: { name: "Eric Tsai" },
  description: "",
  keywords: [],
  openGraph: {
    title: "template",
    description: "",
    url: "",
    // images: [
    //   {
    //     url: '',
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
