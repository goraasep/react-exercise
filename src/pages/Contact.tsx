import { FC } from "react";
import NavLinks from "../components/Navlinks";
import Footer from "../components/Footer";
const Contact: FC = () => {
  return (
    <>
      <NavLinks />
      <div className="flex px-[85px] pt-[215px] pb-[100px] bg-home">
        <div>
          <img src="profile.png" alt="" />
          <div className="flex flex-col gap-2 mt-14 mb-10">
            <div className="text-lg text-dark-gray">Contact Details</div>
            <div className="flex flex-col gap-[6px] text-3xl">
              <div>ayush.barnwal@brightscout.com</div>
              <div>+91 8651447521</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-14 mb-10">
            <div className="text-lg text-dark-gray">Social</div>
            <div className="flex flex-col gap-[6px] text-3xl">
              <div>Linkedin</div>
              <div>Instagram</div>
              <div>Twitter</div>
              <div>Webflow</div>
              <div>Figma</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer isHome={false} />
    </>
  );
};
export default Contact;
