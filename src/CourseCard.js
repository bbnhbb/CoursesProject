import React from "react";
import CourseSingleCard from "./CourseSingleCard";
import "./CourseCard.css";

function CourseCard({ courses }) {
  return (
    <>
      {courses.map((courseData) => (
        <>
          {/* <pre>{JSON.stringify(courseData, null, 2)}</pre> */}
          <CourseSingleCard courseData={courseData} />
        </>
      ))}
    </>
  );
}

export default CourseCard;
