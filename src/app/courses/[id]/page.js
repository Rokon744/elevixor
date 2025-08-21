"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { courses } from "@/db/coursesData";


export default function CourseDetail() {
  const params = useParams();
  const courseId = params?.id;
  const course = courses.find((c)=> c.id === courseId);

  if (!course) {
    return <p className="text-center text-white">Course not found</p>;
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="bg-[#111] p-8 rounded-xl shadow-lg">
        <Image
          src={course.image}
          alt={course.title}
          className="rounded-lg mb-6 w-full max-h-[300px] object-cover"
        />
        <h1 className="text-3xl font-bold text-white">{course.title}</h1>
        <p className="text-gray-400 my-4">{course.desc}</p>
        <p className="text-indigo-400 font-bold">Price: {course.price}</p>
        <p className="text-gray-300">Duration: {course.duration}</p>
        <button className="mt-6 bg-indigo-500 px-5 py-2 text-white rounded-lg hover:bg-indigo-600 transition">
          Enroll Now
        </button>
      </div>
    </section>
  );
}
