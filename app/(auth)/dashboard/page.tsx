import Sidebar from "@/components/sidebar";
import Tags from "@/components/tags";

const Dashboard = () => {
  return (
    <div className="w-[1440px] h-[1024px] top-[194px] flex">
      <div className="w-[285px] h-[1024px]  flex flex-col z-50">
        <Sidebar />
      </div>
      <div className="w-[1107px] p-4">
        <Tags />
      </div>
    </div>
  );
};

export default Dashboard;
