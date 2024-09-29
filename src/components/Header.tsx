import { FC } from "react";
import OverlayButton from "./OverlayButton";
import HeroMovingText from "./HeroMovingText";
import NavLinks from "./NavLinks";
import HeroImage from "../assets/people.png";
interface Props {
  isHidden: boolean;
  handleHidden: () => void;
  // ref: React.RefObject<HTMLElement>;
}
const Header: FC<Props> = ({ ...props }) => {
  return (
    <div className="relative">
      <NavLinks />
      <div
        className="h-screen relative flex justify-center items-end overflow-hidden"
        id="hero-container"
      >
        <img className="max-h-screen" src={HeroImage} alt="" />
        <OverlayButton {...props} />
        <HeroMovingText />
      </div>
    </div>
  );
};

export default Header;
