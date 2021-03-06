import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DisplayTags from "./DisplayTags";
import Lessons from "./Lessons";
import "./CourseSingleCard.css";

function CourseSingleCard({ courseData }) {
  const { name, tags, instructor, progress, lessons } = courseData;

  const [courseCardClicked, setCourseCardClicked] = useState(false);

  const onCourseCardClicked = () => {
    setCourseCardClicked((courseCardClicked) => !courseCardClicked);
  };

  // useEffect(() => {
  //   console.log("courseCard", courseData);
  // }, []);

  return (
    <>
      <div className="course-card" onClick={onCourseCardClicked}>
        <div className="card-info">
          <span className="card-icon">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-hdd-stack"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 10H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"
              />
              <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              <path
                fill-rule="evenodd"
                d="M14 3H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
              />
              <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </svg>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-heart-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </span>
          <span className="info-details">
            <span className="details-heading1">{name}</span>
            <span className="details-heading2">
              <DisplayTags tags={tags} />
            </span>
            <span className="details-heading3">{instructor}</span>
          </span>
        </div>
        <div className="card-loader">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "#2d6a9a",
              trailColor: "lightgray",
            })}
          />
        </div>
      </div>
      {courseCardClicked && <Lessons lessons={lessons} />}
    </>
  );
}

export default CourseSingleCard;
