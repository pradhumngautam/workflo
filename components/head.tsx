import { User } from "lucide-react";
import Image from "next/image";

const Userinfo = () => {
    return (
        <div className=" flex flex-col gap-[8px]">
            <div className="flex gap-2 items-center">
                <Image src= {"/me.svg"} alt="" height={31} width={31} className="rounded-[8px]"/>
                <div className="font-normal text-[20px] ">Joe Gardener</div>
            </div>
            <div className="flex justify-between">
                <div>
                    <Image src={"/icon1.svg"} alt="" width={24} height={24} />
                </div>
                <div></div>
            </div>
            
          
        </div>
    );
}
 
export default Userinfo;