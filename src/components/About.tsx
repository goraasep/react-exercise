import { FC } from "react";

const About: FC = () => {
  return (
    <div className="grid grid-cols-3" id="about">
      <div className="col-span-1 text-4xl font-medium">About</div>
      <div className="col-span-2 text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  );
};
export default About;
