import React, { useEffect } from "react";
import DisplayTags from "./DisplayTags";
import "./Lessons.css";

function Lessons({ lessons }) {
  useEffect(() => {
    console.log(lessons);
  }, []);
  return (
    <div className="lesson-list">
      {lessons.map(({ name, tags, parentName, url }) => (
        <div className="lesson-container">
          <div className="lesson-vedio">
            <iframe
              width="210"
              height="130"
              src={url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="lesson-headding">
            <div className="lesson-icon">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-camera-video-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.667 3h6.666C10.253 3 11 3.746 11 4.667v6.666c0 .92-.746 1.667-1.667 1.667H2.667C1.747 13 1 12.254 1 11.333V4.667C1 3.747 1.746 3 2.667 3z" />
                <path d="M7.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L7.404 7.304a.802.802 0 0 0 0 1.393z" />
              </svg>
            </div>
            <div>
              <div className="lesson-name">{name}</div>
              <div className="lesson-tag">
                <DisplayTags tags={tags}></DisplayTags>
              </div>
              <div className="course-name">{parentName}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lessons;
