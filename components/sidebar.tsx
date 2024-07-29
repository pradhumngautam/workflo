import Image from "next/image";
import Userinfo from "./head";
import { content } from "./sidebar-content";
import Sidebaritems from "./sidebar-items";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="h-screen border-r bg-background flex flex-col justify-between shadow-md pt-[24px] pr-[16px] pb-[32px] pl-[16px] gap-[16px]">
      <div>
        <div className="w-[253px] h-[79px] gap-[8px]">
          <Userinfo />
        </div>
        <div className="flex flex-col mt-3">
          {content.map((item, idx) => (
            <Sidebaritems key={idx} image={item.image} content={item.content} />
          ))}
        </div>
              <Button className="text-[20px] text-[#FFFFFF] font-normal mt-2" variant={"destructive"} size={"sm"}>Create new task <span className="ml-1"><Image src={"/plus.svg"} alt="" width={24} height={24} /></span> </Button>
      </div>

      <div>hello </div>
    </div>
  );
};

export default Sidebar;
