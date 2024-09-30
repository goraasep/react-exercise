import { FC } from "react";
import IMAGE_LIST_1 from "../constants/imageList_1.ts";
import IMAGE_LIST_2 from "../constants/imageList_2.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Galeries: FC = () => {
  return (
    <div className="flex flex-col bg-home">
      <div className="flex gap-10 flex-row overflow-x-scroll overflow-y-visible pb-[41px]">
        {IMAGE_LIST_1.map((images, index) => {
          return (
            <div
              key={index}
              className="px-12 py-14 bg-works flex-shrink-0 hover:drop-shadow-2xl relative group"
            >
              <img src={images.src} alt="" />
              <a
                className="invisible group-hover:visible font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md px-4 py-3 border border-black"
                href={images.link}
              >
                Visit the website
                <FontAwesomeIcon className="-rotate-45" icon={faArrowRight} />
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex gap-10 flex-row overflow-x-scroll overflow-y-visible pb-[40px]">
        {IMAGE_LIST_2.map((images, index) => {
          return (
            <div
              key={index}
              className="px-12 py-14 bg-works flex-shrink-0 hover:drop-shadow-2xl relative group"
            >
              <img src={images.src} alt="" />
              <a
                className="invisible group-hover:visible font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md px-4 py-3 border border-black"
                href={images.link}
              >
                Visit the website
                <FontAwesomeIcon className="-rotate-45" icon={faArrowRight} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Galeries;
