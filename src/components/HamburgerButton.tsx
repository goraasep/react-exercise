import { FC } from "react";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  handleHidden: () => void;
}
const HamburgerButton: FC<Props> = ({ ...props }) => {
  return (
    <div
      onClick={props.handleHidden}
      className="fixed z-40 top-10 right-10 bg-black text-white w-[80px] h-[80px] flex items-center justify-center rounded-full cursor-pointer"
    >
      <FontAwesomeIcon className="w-[40px] h-[40px]" icon={faGripLines} />
    </div>
  );
};
export default HamburgerButton;
