"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { courses } from "@/db/coursesData";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CourseDetail = () => {
  const {id} = useParams();
  const courseId = id;
  const course = courses.find((c) => c.id === courseId);

  // const router = useRouter();

  if (!course) {
    return <p className="text-center mt-10 text-red-500">Course not found</p>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-40">
        {/* Back Button */}
        <motion.button
          className="my-6 flex items-center gap-2 border !border-b-white px-3 py-1 rounded-md fixed z-10 left-6 top-5 transition backbutton cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <IoArrowBackCircleOutline className="text-2xl" />
          Back
        </motion.button>

        {/* Header & Image */}
        <motion.div
          className="shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Image
            src={course.image}
            alt={course.title}
            className="rounded-lg mb-6 w-full max-h-[300px] object-cover"
          />
          <motion.h1
            className="text-3xl font-bold text-white"
            variants={fadeInUp}
          >
            {course.title}
          </motion.h1>
          <motion.p className="text-gray-400 my-4" variants={fadeInUp}>
            {course.desc}
          </motion.p>
          <motion.p className="text-indigo-400 font-bold" variants={fadeInUp}>
            Price: {course.price}
          </motion.p>
          <motion.p className="text-gray-300 pb-8" variants={fadeInUp}>
            Duration: {course.duration}
          </motion.p>
          <motion.a href="/contact"
            className="mt-6 bg-indigo-500 px-5 py-2 text-white rounded-lg hover:bg-indigo-600 transition"
            variants={fadeInUp}
          >
            Enroll Now
          </motion.a>
        </motion.div>
        {/* Details */}
        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold">Course Details</h2>
          <p className="text-gray-400 mt-2">{course.details}</p>
        </motion.section>

        {/* Objectives */}
        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold">Objectives</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
            {course.objectives.map((obj, i) => (
              <motion.li key={i} custom={i} variants={fadeInUp}>
                {obj}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Modules */}
        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold">Modules</h2>
          <div className="mt-2 space-y-4">
            {course.modules.map((module, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#16163a] to-[#241c44] p-6 rounded-lg shadow-lg backdrop-blur-md border border-indigo-700 hover:border-purple-600 transition-colors"
                custom={i}
                variants={fadeInUp}
              >
                <h3 className="font-semibold">{module.name}</h3>
                <ul className="list-disc list-inside mt-1 text-gray-400">
                  {module.lessons.map((lesson, j) => (
                    <li key={j}>{lesson}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Requirements */}
        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold">Requirements</h2>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            {course.requirements.map((req, i) => (
              <motion.li key={i} custom={i} variants={fadeInUp}>
                {req}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold">Outcomes</h2>
          <ul className="list-disc list-inside mt-2 text-gray-400">
            {course.outcomes.map((out, i) => (
              <motion.li key={i} custom={i} variants={fadeInUp}>
                {out}
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.div
        className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-[#797878] pb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        © {new Date().getFullYear()} Elevixor. All rights reserved.
      </motion.div>
    </>
  );
};

export default CourseDetail;


// "use client";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { courses } from "@/db/coursesData";

// export default function CourseDetail() {
//   const {id} = useParams();
//   const courseId = id;
//   const course = courses.find((c) => c.id === courseId);

//   console.log(id);
  

//   if (!course) {
//     return <p className="text-center text-white py-16">Course not found</p>;
//   }

//   return (
//     <section className="container mx-auto px-6 py-16">
//       <div className="bg-[#111] p-8 rounded-xl shadow-lg">
//         {/* Course Banner */}
//         <Image
//           src={course.image}
//           alt={course.title}
//           className="rounded-lg mb-6 w-full max-h-[300px] object-cover"
//         />

//         {/* Title & Price */}
//         <h1 className="text-3xl font-bold text-white">{course.title}</h1>
//         <p className="text-gray-400 my-4">{course.desc}</p>
//         <p className="text-indigo-400 font-bold">Price: {course.price}</p>
//         <p className="text-gray-300">Duration: {course.duration}</p>

//         {/* Instructor */}
//         {course.instructor && (
//           <p className="text-gray-400 mt-2">
//             <span className="font-semibold text-white">Instructor:</span>{" "}
//             {course.instructor}
//           </p>
//         )}

//         {/* Requirements */}
//         {course.requirements && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold text-white mb-2">
//               Requirements
//             </h2>
//             <ul className="list-disc list-inside text-gray-300 space-y-1">
//               {course.requirements.map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Syllabus */}
//         {course.syllabus && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold text-white mb-2">Syllabus</h2>
//             <ul className="list-disc list-inside text-gray-300 space-y-1">
//               {course.syllabus.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* What you'll learn */}
//         {course.learn && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold text-white mb-2">
//               What You’ll Learn
//             </h2>
//             <ul className="list-disc list-inside text-gray-300 space-y-1">
//               {course.learn.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Enroll Button */}
//         <button className="mt-8 bg-indigo-500 px-6 py-3 text-white rounded-lg hover:bg-indigo-600 transition w-full sm:w-auto">
//           Enroll Now
//         </button>
//       </div>
//     </section>
//   );
// }
