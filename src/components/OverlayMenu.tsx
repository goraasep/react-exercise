import { FC } from "react";
import { faCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  isHidden: boolean;
  handleHidden: () => void;
}
const OverlayMenu: FC<Props> = ({ ...props }) => {
  return (
    <div
      className={`w-screen h-screen fixed z-50 grid grid-cols-2 ${
        props.isHidden ? "hidden" : ""
      }`}
    >
      <div className="opacity-50 bg-black" onClick={props.handleHidden}></div>
      <div className="bg-black relative">
        <div
          onClick={props.handleHidden}
          className="bg-white absolute top-16 right-16 w-[80px] h-[80px] flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faX} className="w-[40px] h-[40px]" />
        </div>
        <div className=" pt-[121px] ps-16 text-white flex flex-col gap-[121px]">
          <div className="text-6xl font-medium flex flex-col gap-12">
            <div className="flex gap-5 items-center group">
              <FontAwesomeIcon
                icon={faCircle}
                className="w-[8px] invisible group-hover:visible"
              />
              <a href="/">Home</a>
            </div>
            <div className="flex gap-5 items-center group">
              <FontAwesomeIcon
                icon={faCircle}
                className="w-[8px] invisible group-hover:visible"
              />
              <a href="/#about">About</a>
            </div>
            <div className="flex gap-5 items-center group">
              <FontAwesomeIcon
                icon={faCircle}
                className="w-[8px] invisible group-hover:visible"
              />
              <a href="/#work">Work</a>
            </div>
            <div className="flex gap-5 items-center group">
              <FontAwesomeIcon
                icon={faCircle}
                className="w-[8px] invisible group-hover:visible"
              />
              <a href="/contact-us">Contact</a>
            </div>
            <div className="flex gap-5 items-center group">
              <FontAwesomeIcon
                icon={faCircle}
                className="w-[8px] invisible group-hover:visible"
              />
              <a href="/messages">Messages</a>
            </div>
          </div>
          <div className="flex gap-8 ps-8">
            <a href="https://www.linkedin.com">Linkedin</a>
            <a href="https://www.twitter.com">Twitter</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.webflow.com">Webflow</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverlayMenu;
