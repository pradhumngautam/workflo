import Userinfo from "./head";
import { content } from "./sidebar-content";
import Sidebaritems from "./sidebar-items";

const Sidebar = () => {
  return (
    <div className="h-full border-r bg-background flex flex-col shadow-md pt-[24px] pr-[16px] pb-[32px] pl-[16px] gap-[16px]">
      <div className="w-[253px] h-[79px] gap-[8px]">
        <Userinfo />
      </div>

      <div className="flex flex-col">
        {content.map((item, idx) => (
          <Sidebaritems key={idx} image={item.image} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
