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
        <div className="sidebar-cross" onClick={togglebarClicked}>
          <img src={require("./close.svg")}></img>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
