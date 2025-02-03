// components/DataVisualization.tsx

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; 
import { Line, Pie, Bar } from "react-chartjs-2";
import { Filler } from "chart.js";

// Register Filler plugin
ChartJS.register(Filler);


import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement,ArcElement} from "chart.js";


// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement ,BarElement);

const DataVisualization = () => {
  const { userGrowth, revenueDistribution, topSongs } = useSelector(
    (state: RootState) => state.dataVisualization
  );

  // User Growth Line Chart Data
  const userGrowthData = {
    labels: userGrowth.months,
    datasets: [
      {
        label: "Total Users",
        data: userGrowth.totalUsers,
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Active Users",
        data: userGrowth.activeUsers,
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Revenue Distribution Pie Chart Data
  const revenueDistributionData = {
    labels: revenueDistribution.map((item) => item.label),
    datasets: [
      {
        data: revenueDistribution.map((item) => item.value),
        backgroundColor: ["#4F46E5", "#F59E0B"],
        borderWidth: 1,
      },
    ],
  };

  // Top 5 Streamed Songs Bar Chart Data
  const topSongsData = {
    labels: topSongs.map((item) => item.song),
    datasets: [
      {
        label: "Streams",
        data: topSongs.map((item) => item.streams),
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#111827] mb-6">Data Visualization</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1 (User Growth & Top 5 Streamed Songs) */}
        <div className="space-y-6">
          {/* User Growth Line Chart */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-[#4F46E5] mb-4">User Growth</h3>
            <Line data={userGrowthData} options={{ responsive: true }} />
          </div>

          {/* Top 5 Streamed Songs Bar Chart */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-[#4F46E5] mb-4">Top 5 Streamed Songs</h3>
            <Bar data={topSongsData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Column 2 (Revenue Distribution) */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-[#4F46E5] mb-4 text-center">
            Revenue Distribution
        </h3>
        <div className="flex-1 flex justify-center items-center">
          <Pie data={revenueDistributionData} options={{ responsive: true }} />
       </div>
       </div>

      </div>
    </div>
  );
};

export default DataVisualization;
