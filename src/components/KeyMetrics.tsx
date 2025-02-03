import React from "react";
import { useSelector } from "react-redux";
import {RootState} from '../redux/store'



const KeyMetrics = () => {
    const keyMetrics = useSelector((state: RootState) => state.metrics.metrics);

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold text-[#111827] mb-6">Key Metrics</h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {keyMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4"
            style={{ minHeight: "250px" }}
          >
            
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full text-white"
              style={{ backgroundColor: metric.bg }}
            >
              {metric.icon}
            </div>

           
            <div className="text-center">
              <p className="text-gray-600 text-sm">{metric.title}</p>
              <h3 className="text-xl font-semibold text-[#4F46E5]">{metric.value}</h3>
              <p className="text-sm text-gray-500 mt-2">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;
