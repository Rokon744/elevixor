import { Hero, OurServices, WhyChooseUs } from "@/components/Home";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-6 py-12 text-white container mx-auto">
        <Hero />
        <OurServices />
        <WhyChooseUs />

        {/* Portfolio */}
        {/* <section className="mt-24">
          <h2 className="text-3xl font-semibold mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Web Design",
                imgSrc: "/images/webdesign.png", // Replace with your own images
                button: "View Project",
              },
              {
                title: "App",
                imgSrc: "/images/app.png",
                button: "View Project",
              },
              {
                title: "Prordcare",
                imgSrc: "/images/prordcare.png",
                button: "View Project",
              },
              {
                title: "Digital Art",
                imgSrc: "/images/digitalart.png",
                button: "View Project",
              },
            ].map(({ title, imgSrc, button }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-[#16163a] to-[#241c44] p-4 rounded-lg shadow-lg border border-indigo-700 hover:border-purple-600 transition-colors flex flex-col items-center"
              >
                <div className="w-full h-32 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <h3 className="mb-3 font-semibold text-lg">{title}</h3>
                <button className="bg-purple-700 px-5 py-2 rounded-md text-white text-sm hover:bg-purple-600 transition">
                  {button}
                </button>
              </div>
            ))}
          </div>
        </section> */}
        <h1 className="mt-20 text-[40px]">Work In Progress...</h1>
      </div>
    </>
  );
}
