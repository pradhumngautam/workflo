import Image from "next/image";
import { Button } from "./ui/button";

const Todo = () => {
    return ( 
        <div className=" flex flex-col gap-[16px]">
            <div className="h-[24px] flex justify-between ">
                <div className="font-normal text-[20px] text-[#555555]">To do</div>
                <Image src={"/todo.svg"} alt="" height={24} width={24} />
            </div>
            <div>
                todos
            </div>
            <div></div>
        </div>
     );
}
 
export default Todo;