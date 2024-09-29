import { FC } from "react";
interface Props {
  isHidden: boolean;
  handleHidden: () => void;
}
const OverlayButton: FC<Props> = ({ ...props }) => {
  return (
    <div
      onClick={props.handleHidden}
      className="absolute top-1/2 right-0 bg-black text-white -translate-y-1/2 translate-x-[240px] hover:translate-x-0 py-5 px-8 rounded-l-full flex gap-7 items-center overflow-hidden overlay-button"
    >
      <span className="text-5xl h-14">👋</span>
      <span className="text-4xl">Hi I’m Ayush</span>
    </div>
  );
};
export default OverlayButton;
