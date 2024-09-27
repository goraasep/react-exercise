import { FC } from "react";
import Header from "../components/Header";
import Works from "../components/Works.tsx";
import { DUMMY_PROJECTS } from "../constants/projectList.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse } from "@fortawesome/free-solid-svg-icons";
const Home: FC = () => {
  return (
    <>
      <Header></Header>
      <div
        className="px-20 flex justify-between py-40 flex-col gap-40"
        id="home"
      >
        <div className="grid grid-cols-3" id="about">
          <div className="col-span-1 text-4xl font-medium">About</div>
          <div className="col-span-2 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <Works></Works>
        {/* <div className="grid grid-cols-3" id="work">
          <div className="col-span-1 text-4xl font-medium">Recent Work</div>
          <div className="col-span-2 text-2xl flex gap-5 flex-col">
            {DUMMY_PROJECTS.map((project, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-6xl">{project.name}</div>
                      <div className="text-lg flex flex-row mt-[18px]">
                        {project.roles.map((role, index) => {
                          if (
                            index !== 0 &&
                            index !== project.roles.length - 1
                          ) {
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
                    <a className="flex items-center">
                      <FontAwesomeIcon
                        className="p-[20px] rounded-full border-[1px] border-gray-900 -rotate-45"
                        icon={faArrowRight}
                      />
                    </a>
                  </div>

                  {index !== DUMMY_PROJECTS.length - 1 && (
                    <hr className="mt-8" />
                  )}
                </div>
              );
            })}
            <div></div>
            <hr className="mt-8" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
