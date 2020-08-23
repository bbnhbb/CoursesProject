import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";

function MobileNavbar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const togglebarClicked = () => {
    setOpenSideBar((openSidebar) => !openSidebar);
  };

  return (
    <>
      <nav className="mobileNavbar">
        <span className="mobileNavbar-togglebar" onClick={togglebarClicked}>
          <img src={require("./open-menu.svg")}></img>
        </span>
        <span className="mobileNavbar-heading">COURSES</span>
      </nav>
      <div
        className={
          "sidebar " + (openSideBar ? "sidebar-expand" : "sidebar-close")
        }
      >
        <div className="sidebar-wrapper">
          <NavbarLinks />
        </div>
        <div class="overlay-drawer">
          <div className="sidebar-cross" onClick={togglebarClicked}>
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              class="bi bi-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
