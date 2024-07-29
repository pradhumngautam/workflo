import Image from "next/image";
import { tagdata } from "./tag-content";




type tagprops = tagdata;

const Tagcard = ({src, title, content}:tagprops) => {

    return <div>
      <div className="h-[61] w-[77]"><Image src={src} alt="" height={61} width={77}/></div>
      <div className=""></div>
  </div>;
};

export default Tagcard;
