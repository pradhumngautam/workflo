import Image from "next/image";

const Tags = () => {
  return (
    <div className="w-[1107px] h-[253px] flex flex-col gap-[16px]">
      <div className="w-full h-[58px] flex justify-between">
        <div className="font-semibold text-[48px] text-[#080808] font-[barlow] leading-10">
          Good morning, Joe!
        </div>
        <div className="flex gap-1 items-center">
          <div className="font-normal text-[16px] text-[#080808]">Help & feedback </div>{" "}
          <div>
            <Image src={"/question.svg"} alt="" height={24} width={24} />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Tags;
