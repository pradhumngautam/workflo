import Sidebar from "@/components/sidebar";

const Dashboard = () => {
  return (
    <div className="w-[1440px] h-[1024px] top-[194px] left-[8104px] flex">
      <div className="w-[285px] h-[1024px] fixed flex flex-col z-50">
        <Sidebar />
      </div>
      <div>hello</div>
    </div>
  );
};

export default Dashboard;
