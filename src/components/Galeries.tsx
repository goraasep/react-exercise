import { FC } from "react";
import IMAGE_LIST_1 from "../constants/imageList_1.ts";
import IMAGE_LIST_2 from "../constants/imageList_2.ts";
const Galeries: FC = () => {
  return (
    <div className="flex flex-col gap-[41px] bg-home">
      <div className="flex gap-10 flex-row overflow-x-scroll overflow-y-visible ">
        {IMAGE_LIST_1.map((images, index) => {
          return (
            <div
              key={index}
              className="px-12 py-14 bg-works flex-shrink-0 hover:shadow-2xl"
            >
              <img src={images.src} alt="" />
            </div>
          );
        })}
      </div>
      <div className="flex gap-10 flex-row overflow-x-scroll overflow-y-visible ">
        {IMAGE_LIST_2.map((images, index) => {
          return (
            <div
              key={index}
              className="px-12 py-14 bg-works flex-shrink-0 hover:shadow-2xl"
            >
              <img src={images.src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Galeries;
