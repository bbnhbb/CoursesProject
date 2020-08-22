import React from "react";
import ActivityCard from "./ActivityCard";
import CourseCard from "./CourseCard";
import "./Courses.css";
import courseData from "./Data/coursesData.json";
import activityData from "./Data/activityData.json";

function Courses() {
  const percentage = 66;
  return (
    <div className="courses-container">
      <div class="myCourses">
        <h4>My Courses</h4>
        <div className="course-list">
          <CourseCard courses={courseData} />
        </div>
      </div>
      <div className="latestActivity-container">
        <h4>Latest Activity</h4>
        <div className="activity-list">
          <ActivityCard activity={activityData} />
        </div>
      </div>
    </div>
  );
}

export default Courses;
