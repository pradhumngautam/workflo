import { User } from "lucide-react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="w-[1440px] h-[1024px] top-[194px] left-[8104px] flex">
      <div className="w-[285px] h-screen flex flex-col justify-between">
        <div className="w-[253px] h-[363px] gap-[16px] pt-[24px] pr-[16] pl-[16px]">
          <div className="w-[253px] h-[79px] gap-[8px]">
            <div className="h-[31px] w-[253px] flex gap-1">
              <User className="p-0.75" />
              <div>Pradhumn</div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>

        <div>2</div>
      </div>

      <div className="w-[1107px]">hello guys</div>
    </div>
  );
};

export default Dashboard;
