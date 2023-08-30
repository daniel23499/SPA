/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import open from "./assets/images/icon-menu.svg";

const Navbar = ({ onClick }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      {width >= 1024 ? (
        <nav>
          <img src={logo} alt="logo" />
          <section className="navbar">
            <div>Home</div>
            <div>New</div>
            <div>Popular</div>
            <div>Trending</div>
            <div>Categories</div>
          </section>
        </nav>
      ) : (
        <nav>
          <img src={logo} alt="logo" />
          <img src={open} alt="close" onClick={onClick} />
        </nav>
      )}
    </>
  );
};

export default Navbar;
