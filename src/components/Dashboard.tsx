
import { useState } from "react";
import {
  FaChartBar,
  FaChartPie,
  FaTable,
  FaCog,
  FaQuestionCircle,
  FaUser,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import KeyMetrics from "./KeyMetrics";
import DataVisualization from "./DataVisualization";
import DataTable from "./DataTable";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<string>("keyMetrics");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setSidebarOpen(false); // Close sidebar after selection on mobile
  };

  return (
    <div className="flex h-screen">
      {/* Mobile Top Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white p-4 shadow-md flex justify-between items-center z-50">
        <h2 className="text-[#4F46E5] font-bold text-2xl">Streamify</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[#4F46E5]">
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar (Hidden in Mobile, Visible in Large Screens) */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white p-4 shadow-lg transform transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:block z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#4F46E5] flex items-center justify-center rounded-lg text-white text-lg font-bold">
            S
          </div>
          <h2 className="text-[#4F46E5] font-bold text-2xl">Streamify</h2>
        </div>

        {/* Sidebar Sections */}
        <div className="mb-8">
          <h2 className="text-left text-[#4F46E5] text-xl mb-2 p-4">Dashboard</h2>

          <div
            onClick={() => handleSectionClick("keyMetrics")}
            className={`flex items-center gap-3 p-3 w-full text-left mb-4 cursor-pointer rounded-lg ${
              activeSection === "keyMetrics" ? "bg-[#4F46E5] text-white" : "text-[#111827]"
            }`}
          >
            <FaChartBar size={20} />
            <span>Key Metrics</span>
          </div>

          <div
            onClick={() => handleSectionClick("dataVisualization")}
            className={`flex items-center gap-3 p-3 w-full mb-4 cursor-pointer rounded-lg ${
              activeSection === "dataVisualization" ? "bg-[#4F46E5] text-white" : "text-[#111827]"
            }`}
          >
            <FaChartPie size={20} />
            <span>Data Visualization</span>
          </div>

          <div
            onClick={() => handleSectionClick("dataTable")}
            className={`flex items-center gap-3 p-3 w-full cursor-pointer rounded-lg ${
              activeSection === "dataTable" ? "bg-[#4F46E5] text-white" : "text-[#111827]"
            }`}
          >
            <FaTable size={20} />
            <span>Data Table</span>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="space-y-2">
          <div
            
            className={`flex items-center gap-3 p-3 w-full rounded-lg cursor-pointer ${
              activeSection === "settings" ? "bg-[#4F46E5] text-white" : "text-[#111827]"
            }`}
          >
            <FaCog size={20} />
            <span>Settings</span>
          </div>

          <div
            
            className={`flex items-center gap-3 p-3 w-full rounded-lg cursor-pointer ${
              activeSection === "helpCenter" ? "bg-[#4F46E5] text-white" : "text-[#111827]"
            }`}
          >
            <FaQuestionCircle size={20} />
            <span>Help Center</span>
          </div>
        </div>

        {/* User Profile */}
        <div
          className="fixed bottom-5 left-0 flex items-center gap-3 p-3 w-60 m-2 rounded-lg cursor-pointer bg-[#E5E7EB] hover:bg-[#D1D5DB] transition"
        >
          <FaUser size={20} className="text-[#111827]" />
          <span className="font-semibold text-[#111827]">John Doe</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-0 overflow-auto mt-16 lg:mt-0">
        {activeSection === "keyMetrics" && <KeyMetrics />}
        {activeSection === "dataVisualization" && <DataVisualization />}
        {activeSection === "dataTable" && <DataTable />}
      </div>
    </div>
  );
};

export default Dashboard;
