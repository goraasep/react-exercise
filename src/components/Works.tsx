import { FC } from "react";
import { DUMMY_PROJECTS } from "../constants/projectList.ts";
import WorkItem from "./WorkItem.tsx";
const Works: FC = () => {
  return (
    <div className="grid grid-cols-3" id="work">
      <div className="col-span-1 text-4xl font-medium">Recent Work</div>
      <div className="col-span-2 text-2xl flex gap-5 flex-col">
        {DUMMY_PROJECTS.map((project, index) => {
          return (
            <div key={index}>
              <WorkItem {...project} />
              {index !== DUMMY_PROJECTS.length - 1 && <hr className="mt-8" />}
            </div>
          );
        })}
        <div></div>
        <hr className="mt-8" />
      </div>
    </div>
  );
};

export default Works;
