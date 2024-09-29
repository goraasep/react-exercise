interface Testimony {
  name: string;
  role: string;
  quote: string;
  src: string;
}

const TESTIMONY_LIST: Testimony[] = [
  {
    name: "Ayush Raj",
    role: "VP of Marketing @ Webflow",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” ",
    src: "ayush.png",
  },
  {
    name: "Alex Cattoni",
    role: "Founder @ CopyPossy",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” ",
    src: "alex.png",
  },
];

export default TESTIMONY_LIST;
