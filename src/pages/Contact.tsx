import { FC } from "react";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";
const Contact: FC = () => {
  return (
    <>
      <NavLinks />
      <div className="grid grid-cols-2 px-[85px] pt-[215px] pb-[100px] bg-home">
        <div className="row-span-1">
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
        <div className="row-span-1 flex gap-[37px] flex-col">
          <div className="text-6xl font-medium">
            Let’s build something cool together
          </div>
          <form action="" className="flex flex-col gap-8">
            <div>
              <label htmlFor="name" className="text-lg">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="James Robert"
                className="w-full p-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="ayush.barnwal@brightscout.com"
                className="w-full p-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-lg">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="For web design work Enquire"
                className="w-full p-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-lg">
                Message
              </label>
              <textarea
                name=""
                id="message"
                className="w-full p-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500 h-[158px]"
                placeholder="Type your Message"
              ></textarea>
            </div>
            <div>
              <button className="py-6 px-12 bg-black rounded-full text-white text-lg font-medium w-[193px]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer isHome={false} />
    </>
  );
};
export default Contact;
