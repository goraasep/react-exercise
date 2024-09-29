import { FC, useEffect, useRef } from "react";
import Header from "../components/Header";
import Works from "../components/Works.tsx";
import Galeries from "../components/Galeries.tsx";
import About from "../components/About.tsx";
import Testimonials from "../components/Testimonials.tsx";

import Footer from "../components/Footer.tsx";
import { useState } from "react";
import OverlayMenu from "../components/OverlayMenu.tsx";
import useIsVisible from "../functions/useIsVisible.ts";
import HamburgerButton from "../components/HamburgerButton.tsx";
const Home: FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleHidden = () => {
    setIsHidden(!isHidden);
  };
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(divRef);
  useEffect(() => {
    if (isVisible) {
      console.log("visible");
    } else {
      console.log("not visible");
    }
  }, [isVisible]);
  return (
    <>
      <OverlayMenu isHidden={isHidden} handleHidden={handleHidden} />
      {!isVisible && <HamburgerButton handleHidden={handleHidden} />}
      <div ref={divRef}>
        <Header isHidden={isHidden} handleHidden={handleHidden} />
      </div>
      <div className="px-20 flex justify-between py-40 flex-col gap-40 bg-home">
        <About />
        <Works />
      </div>
      <Galeries />
      <Testimonials />
      <Footer isHome={true} />
    </>
  );
};

export default Home;
