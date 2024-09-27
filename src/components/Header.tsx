import { FC } from "react";
import OverlayButton from "./OverlayButton";
import HeroMovingText from "./HeroMovingText";

import HeroImage from "../assets/people.png";
const Header: FC = () => {
  return (
    <div
      className="w-screen h-screen relative flex justify-center items-end overflow-hidden"
      id="hero-container"
    >
      <div className="absolute top-0 left-50%  w-[calc(100%-160px)] py-6 px-20 flex justify-between z-2 ">
        <div className="">@Ayush Barnwal</div>
        <div className="flex gap-10">
          <a className="" href="/">
            About
          </a>
          <a href="#work">Work</a>
          <a href="/contact-us">Contact</a>
        </div>
      </div>
      <img className="max-h-screen" src={HeroImage} alt="" />
      <OverlayButton></OverlayButton>
      <HeroMovingText></HeroMovingText>
    </div>
  );
};

export default Header;
