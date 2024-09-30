import { FC } from "react";
import TESTIMONY_LIST from "../constants/testimonyList.ts";
const Testimonials: FC = () => {
  return (
    <div className="px-20 flex justify-between pt-[119px] pb-[141px] flex-col gap-40 bg-home">
      <div className="grid grid-cols-3" id="about">
        <div className="col-span-1 text-4xl font-medium">Testimonials</div>
        <div className="col-span-2 text-2xl flex flex-col gap-16">
          {TESTIMONY_LIST.map((testimony, index) => {
            return (
              <div key={index} className="flex flex-col gap-7">
                <div>{testimony.quote}</div>
                <div className="flex justify-start gap-3 items-center">
                  <img src={testimony.src} alt="" />
                  <div>
                    <div className="text-lg">{testimony.name}</div>
                    <div className="text-sm">{testimony.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
