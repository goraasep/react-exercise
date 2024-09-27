import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse } from "@fortawesome/free-solid-svg-icons";

interface Project {
  name: string;
  roles: string[];
  link: string;
}
const WorkItem: FC<Project> = ({ name, roles, link }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-6xl">{name}</div>
        <div className="text-lg flex flex-row mt-[18px]">
          {roles.map((role, index) => {
            if (index !== 0 && index !== roles.length - 1) {
              return (
                <div key={index} className="flex">
                  <div className="mx-[6px]">-</div>
                  <div>{role}</div>
                  <div className="mx-[6px]">-</div>
                </div>
              );
            } else {
              return <div key={index}>{role}</div>;
            }
          })}
        </div>
      </div>
      <a className="flex items-center" href={link}>
        <FontAwesomeIcon
          className="p-[20px] rounded-full border-[1px] border-gray-900 -rotate-45"
          icon={faArrowRight}
        />
      </a>
    </div>
  );
};

export default WorkItem;
