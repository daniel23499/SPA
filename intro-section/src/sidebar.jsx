/* eslint-disable react/prop-types */
import { useState } from "react";
import close from "./assets/images/icon-close-menu.svg";
import upArrow from "./assets/images/icon-arrow-up.svg";
import downArrow from "./assets/images/icon-arrow-down.svg";
import todo from "./assets/images/icon-todo.svg";
import calendar from "./assets/images/icon-calendar.svg";
import reminder from "./assets/images/icon-reminders.svg";
import planning from "./assets/images/icon-planning.svg";

export const Dropdown = ({ title, children }) => {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="dropdown-btn" onClick={() => setisActive(!isActive)}>
      <span>{title}</span>
      {isActive ? (
        <>
          <img src={upArrow} alt="up" />
          <div className="dropdown">{children}</div>
        </>
      ) : (
        <img src={downArrow} alt="down" />
      )}
    </div>
  );
};

const Sidebar = ({ isActive, onActive }) => {
  return (
    <>
      {isActive && (
        <div className="sidebar">
          <div className="sidebar-overlay"></div>
          <aside>
            <img src={close} alt="close" onClick={onActive} />
            <div className="menu">
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
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
