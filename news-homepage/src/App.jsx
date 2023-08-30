import mobileimg from "./assets/images/image-web-3-mobile.jpg";
import Navbar from "./Navbar";
import retropc from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import controller from "./assets/images/image-gaming-growth.jpg";
import { useState } from "react";
import Sidebar from "./sidebar";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Sidebar onActive={isActive} onClick={() => setIsActive(false)} />
      <Navbar onClick={() => setIsActive(true)} />
      <main>
        <section className="content">
          <section className="content-top">
            <img src={mobileimg} alt="img" />
            <section className="content-top-bottom">
              <div>
                <h1>The Bright Future of Web 3.0?</h1>
              </div>
              <div>
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>READ MORE</button>
              </div>
            </section>
          </section>

          <section className="content-bottom">
            <h1>New</h1>
            <section>
              <h2>Hydrogen VS Electric Cars</h2>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </section>
            <section>
              <h2>The downsides of AI Artistry</h2>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </section>
            <section>
              <h2>Is VC funding drying up?</h2>
              <p>
                Private funding by VC firms is down 50% YOY.We take a look at
                what that means.
              </p>
            </section>
          </section>
        </section>
        <section className="content-footer">
          <section>
            <img src={retropc} alt="img1" />
            <section>
              <h1>01</h1>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given mordern upgrades?</p>
            </section>
          </section>
          <section>
            <img src={laptop} alt="img1" />
            <section>
              <h1>02</h1>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for various needs and budgets.</p>
            </section>
          </section>
          <section>
            <img src={controller} alt="img1" />
            <section>
              <h1>03</h1>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
