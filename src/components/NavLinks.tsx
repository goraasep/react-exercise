import { FC } from "react";

const NavLinks: FC = () => {
  return (
    <div className="absolute top-0 left-50%  w-[calc(100%)] py-6 px-20 flex justify-between z-20 ">
      <div className="">@Ayush Barnwal</div>
      <div className="flex gap-10">
        <a className="" href="/#about">
          About
        </a>
        <a href="/#work">Work</a>
        <a href="/contact-us">Contact</a>
        <a href="/messages">Messages</a>
      </div>
    </div>
  );
};

export default NavLinks;
