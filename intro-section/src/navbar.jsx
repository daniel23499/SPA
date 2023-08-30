/* eslint-disable react/prop-types */
import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import todo from "./assets/images/icon-todo.svg";
import calendar from "./assets/images/icon-calendar.svg";
import reminder from "./assets/images/icon-reminders.svg";
import planning from "./assets/images/icon-planning.svg";
import { Dropdown } from "./sidebar";
import { useEffect, useState } from "react";

const Navbar = ({ onActive }) => {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const showNav = {
    display: width >= 1024 ? "flex" : "none",
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <img src={menu} alt="menu" className="sidebar-btn" onClick={onActive} />
      <div className="menu" style={showNav}>
        <div className="sidebar-top">
          <Dropdown title="Features">
            <div>
              <img src={todo} alt="todo" />
              &nbsp; Todo List
            </div>
            <div>
              <img src={calendar} alt="calendar" />
              &nbsp; Calendar
            </div>
            <div>
              <img src={reminder} alt="reminder" />
              &nbsp; Reminders
            </div>
            <div>
              <img src={planning} alt="planning" />
              &nbsp; Planning
            </div>
          </Dropdown>
          <Dropdown title="Company">
            <div>History</div>
            <div>Our Team</div>
            <div>Blog</div>
          </Dropdown>
          <div>Careers</div>
          <div>About</div>
        </div>

        <div className="sidebar-bottom">
          <div>Login</div>
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
