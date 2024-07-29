import Image from "next/image";
import { contentdata } from "./sidebar-content";

type contentprops = contentdata;

const Sidebaritems = ({ image, content }: contentprops) => {
  <div className="flex flex-col w-[253px] h-[200px] gap-[8px]">
    <Image src={image.src} alt="" height={24} width={24} />
      <div className="font-normal text-[20px] ">{content}</div>
  </div>;
};

export default Sidebaritems;
