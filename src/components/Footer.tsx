import { FC } from "react";
interface Props {
  isHome: boolean;
}

const Footer: FC<Props> = ({ isHome = true }) => {
  let bottomPadding: string = "pb-[33px]";
  if (!isHome) {
    bottomPadding = "pb-20";
  }
  return (
    <div
      className={`px-20 flex justify-between pt-20 ${bottomPadding} flex-col gap-[142px] bg-footer`}
    >
      {isHome && (
        <div className="flex justify-between text-white items-center">
          <div className="flex flex-col gap-2">
            <div className="text-6xl">Have something in mind?</div>
            <div className="flex flex-row flex-start gap-3 items-center">
              <img src="footer.png" alt="" />
              <div className="text-6xl">let’s build it together.</div>
            </div>
          </div>
          <div className="py-6 px-12 bg-white rounded-full text-black text-lg font-medium">
            Get in touch
          </div>
        </div>
      )}
      <div className="text-white flex justify-between text-lg font-normal">
        <div>Build with 💖 by Brightscout & Ayush </div>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/">Linkedin</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.webflow.com/">Webflow</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
