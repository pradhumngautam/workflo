import Image from "next/image";
import { tagdata } from "./tag-content";




type tagprops = tagdata;

const Tagcard = ({src, title, content}:tagprops) => {

    return <div className="h-[123px] w-[363.67px] flex gap-[10px] p-[16px] border-[1px] rounded-[8px] bg-[#FFFFFF]">
      <div className="h-[61] w-[77]"><Image src={src} alt="" height={61} width={77}/></div>
        <div className="h-[74px] w-[244.67px] flex flex-col gap-[4px]">
            <div className="font-semibold text-[16px] text-[#757575]">{title}</div>
            <div className="font-normal text-[14px] text-[#868686]">{content}</div>
      </div>
  </div>;
};

export default Tagcard;
