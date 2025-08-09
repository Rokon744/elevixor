import React from "react";
import team from "@/assets/Home/team.jpg"
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="mt-24 flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={team}
          alt="Team working"
          width={600}
          height={400}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Expert Team",
              desc: "Purrsiaimprovents confront seem",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.5a11.952 11.952 0 01-6.824-3.443 12.083 12.083 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14v7.5"
                  />
                </svg>
              ),
            },
            {
              title: "Support",
              desc: "Furgjerer yon maces expronfmitrition",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-1.414 1.414M12 8v4m0 0l-3 3m3-3l3 3M6.343 17.657l1.414-1.414"
                  />
                </svg>
              ),
            },
            {
              title: "Quality",
              desc: "Invnomend fecsal retriect nthology",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                  <path d="M12 20.5v-7.5" />
                </svg>
              ),
            },
            {
              title: "Affordable",
              desc: "dimeet buvive phodrs regunization",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 16v-4l3 2" />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="mt-1">{icon}</div>
              <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
