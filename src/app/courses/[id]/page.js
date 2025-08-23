"use client";
import CourseDetail from "@/pages/CourseDetail";
import React from "react";
import { courses } from "@/db/coursesData";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  const courseId = id;
  const course = courses.find((c) => c.id === courseId);
  return (
    <div>
      <CourseDetail course={course} />
    </div>
  );
};

export default page;
