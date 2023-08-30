/* eslint-disable react/prop-types */
import close from "./assets/images/icon-menu-close.svg";

const Sidebar = ({ onActive, onClick }) => {
  return (
    onActive && (
      <>
        <div className="sidebar-overlay"></div>
        <aside>
          <section>
            <img src={close} alt="close" onClick={onClick} />
          </section>
          <section>
            <div>Home</div>
            <div>New</div>
            <div>Popular</div>
            <div>Trending</div>
            <div>Categories</div>
          </section>
        </aside>
      </>
    )
  );
};

export default Sidebar;
