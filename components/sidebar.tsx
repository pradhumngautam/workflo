
import Userinfo from "./head";

const Sidebar = () => {
    return (
      <div className="h-full border-r bg-background flex flex-col overflow-y-auto shadow-md pt-[24px] pr-[16px] pb-[32px] pl-[16px]">
        <div className="w-[253px] h-[79px] gap-[8px]">
          <Userinfo />
        </div>
  
        <div className="flex flex-col w-full">
          
        </div>
      </div>
    );
  };
  
  export default Sidebar;