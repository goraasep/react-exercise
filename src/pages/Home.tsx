import { FC, RefObject, useEffect, useMemo, useRef } from "react";
import Header from "../components/Header";
import Works from "../components/Works.tsx";
import Galeries from "../components/Galeries.tsx";
import About from "../components/About.tsx";
import Testimonials from "../components/Testimonials.tsx";
import { faCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer.tsx";
import React, { useState } from "react";
import OverlayMenu from "../components/OverlayMenu.tsx";
const Home: FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleHidden = () => {
    setIsHidden(!isHidden);
  };
  // const ref: RefObject<HTMLElement> = useRef(null)
  // const [isIntersecting, setIntersecting] = useState(false)

  // const observer = useMemo(() => new IntersectionObserver(
  //   ([entry]) => setIntersecting(entry.isIntersecting)
  // ), [ref])

  // useEffect(() => {
  //   observer.observe(ref.current)
  //   return () => observer.disconnect()
  // }, [])

  return (
    <>
      <OverlayMenu isHidden={isHidden} handleHidden={handleHidden} />
      <Header isHidden={isHidden} handleHidden={handleHidden} />
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
