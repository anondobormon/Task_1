import { useEffect, useState } from "react";
import { images } from "../../utils/demoData";
import "./Navbar.scss";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", hideSidebar);

    return () => {
      window.removeEventListener("resize", hideSidebar);
    };
  }, []);

  const hideSidebar = () => {
    if (window !== undefined) {
      let width = window.innerWidth;
      width > 1200 && setSideBar(false);
    }
  };
  return (
    <div id="#nav">
      <div className="navbar">
        <div className="container">
          <div className="flex">
            <div className="logo">
              <img src={images.logo} alt="" />

              <span>Doctor Guide</span>
            </div>

            <ul>
              <li className="menu-items">
                <a href="#hero" className="menu">
                  HOME{" "}
                  <span>
                    <i class="fa-sharp fa-solid fa-chevron-down"></i>
                  </span>{" "}
                </a>
                <a href="#schedule" className="menu">
                  FEATURES{" "}
                  <span>
                    <i class="fa-sharp fa-solid fa-chevron-down"></i>
                  </span>{" "}
                </a>
                <a href="#care" className="menu">
                  DEPARTMENT{" "}
                  <span>
                    <i class="fa-sharp fa-solid fa-chevron-down"></i>
                  </span>{" "}
                </a>
                <a href="#event" className="menu">
                  EVENT{" "}
                  <span>
                    <i class="fa-sharp fa-solid fa-chevron-down"></i>
                  </span>{" "}
                </a>
                <a href="#contact" className="menu">
                  CONTACT US{" "}
                  <span>
                    <i class="fa-sharp fa-solid fa-chevron-down"></i>
                  </span>{" "}
                </a>
              </li>

              <li>
                <button className="button">LOGIN</button>
                <button className="button">SIGNUP</button>
                <div
                  onClick={() => {
                    setSideBar(!sideBar);
                  }}
                  className="menu_bar"
                >
                  <i class="fa-solid fa-bars"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`sidebar ${sideBar && "toggle"}`}>
        <div className="items">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Department</li>
            <li>Event</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
