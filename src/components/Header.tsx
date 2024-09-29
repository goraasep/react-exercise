import { FC } from "react";
import OverlayButton from "./OverlayButton";
import HeroMovingText from "./HeroMovingText";
import NavLinks from "./Navlinks";
import HeroImage from "../assets/people.png";
const Header: FC = () => {
  return (
    <div className="relative">
      <NavLinks />
      <div
        className="h-screen relative flex justify-center items-end overflow-hidden"
        id="hero-container"
      >
        {/* <NavLinks /> */}
        <img className="max-h-screen" src={HeroImage} alt="" />
        <OverlayButton />
        <HeroMovingText />
      </div>
    </div>
  );
};

export default Header;
