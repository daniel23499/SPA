import img from "./assets/images/image-hero-mobile.png";
import databiz from "./assets/images/client-databiz.svg";
import audiophile from "./assets/images/client-audiophile.svg";
import meet from "./assets/images/client-meet.svg";
import maker from "./assets/images/client-maker.svg";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Sidebar isActive={show === true} onActive={() => setShow(false)} />
      <Navbar onActive={() => setShow(true)} />
      <main>
        <img src={img} alt="img" />
        <article className="text">
          <h1>Make Remote Work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes,create team rituals, and watch productivity soar.
          </p>
          <button className="text-button">Learn more</button>
          <div className="text-bottom">
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </article>
      </main>
      {/* write swap function for main and make modify h1  */}
    </>
  );
};

export default App;
