import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Signup = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF]">
      <Card className="w-[648px] h-[556px] mt-20 ml-[396px] rounded-[16px] p-[60px] bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0]">
        <div className="width-[528px] height-[58px] font-semibold font-Barlow text-[48px] text-center">
          Welcome to <span className="text-[#5539f0]">Workflo</span>!
        </div>
        <div className="w-[528px] h-[290px] flex flex-col gap-[30px] mt-4">
          <Textarea placeholder="Full name" />
          <Textarea placeholder="Your email" />
          <Textarea placeholder="Password" />
          <Button className="text-[20px] font-normal text-[#FFFFFF]">
            Sign up
          </Button>
        </div>
        <div className="h-[24px] font-normal text-[20px] text-center text-[#606060] mt-4 ">
          Already have an account?<span className="text-[#0054A1]">Log in</span>
          .
        </div>
      </Card>
    </div>
  );
};

export default Signup;
