import React from "react";

function NavbarLinks() {
  return (
    <>
      <div className="Navbar-Top">
        <div className="ct-icon-box">
          <div className="inner">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-bullseye"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fillRule="evenodd"
                d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
              <path
                fillRule="evenodd"
                d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
              />
              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
            <span>Courses</span>
          </div>
        </div>
        <div className="ct-icon-box">
          <div className="inner">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-collection-play"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
              />
              <path
                fillRule="evenodd"
                d="M6.258 6.563a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"
              />
            </svg>
            <span>Library</span>
          </div>
        </div>
        <div className="ct-icon-box">
          <div className="inner">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-heart"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
            <span>Favoraits</span>
          </div>
        </div>
      </div>
      <div className="Navbar-Bottom">
        <div className="ct-icon-box">
          <div className="inner">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-person-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>
            <span>Account</span>
          </div>
        </div>
        <div className="ct-icon-box">
          <div className="inner">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-signpost"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 1.414V4h2V1.414a1 1 0 0 0-2 0z" />
              <path
                fillRule="evenodd"
                d="M12.532 5H2v4h10.532l1.666-2-1.666-2zM2 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H2z"
              />
              <path d="M7 10h2v6H7v-6z" />
            </svg>
            <span>logout</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarLinks;
