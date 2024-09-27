import { FC } from "react";
import Header from "../components/Header";
import { DUMMY_PROJECTS } from "../constants/projectList.ts";
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
        <div className="grid grid-cols-3" id="work">
          <div className="col-span-1 text-4xl font-medium">Recent Work</div>
          <div className="col-span-2 text-2xl flex gap-5 flex-col">
            {DUMMY_PROJECTS.map((project, index) => {
              return (
                <div>
                  <div className="text-6xl">{project.name}</div>
                  <div className="text-lg flex flex-row mt-[18px]">
                    {project.roles.map((role, index) => {
                      if (index !== 0 && index !== project.roles.length - 1) {
                        return (
                          <>
                            <div className="mx-[6px]">-</div>
                            <div>{role}</div>
                            <div className="mx-[6px]">-</div>
                          </>
                        );
                      } else {
                        return <div>{role}</div>;
                      }
                    })}
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
        </div>
      </div>
    </>
  );
};

export default Home;
