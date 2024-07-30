import { todosdata } from "../todos";
import { Badge } from "./badge";
import { Button } from "./button";

type Cardprops = todosdata;

const Taskcard = ({ title, content, priority, deadline, time }: Cardprops) => {
  return (
    <div className="w-[256.75px] flex flex-col gap-[16px] rounded-[8px] pt-[14px] pr-[13px] pb-[14px] pl-[13px] border-[1px] bg-[#F9F9F9] border-[#DEDEDE]">
      <div className="flex flex-col gap-[13px]">
        <div className="flex flex-col gap-[12px]">
          <div className="font-medium text-[16px] text-[#606060]">{title}</div>
          <div className="text-[#797979] text-[14px] font-normal">
            {content}
          </div>
        </div>
        <div>
          {priority == "Low" && <Badge className="">{priority}</Badge>}
          {priority == "Medium" && (
            <div className="text-green-600">{priority}</div>
          )}
          {priority == "Urgent" && (
            <div className="text-red-600">{priority}</div>
          )}
        </div>

        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Taskcard;
