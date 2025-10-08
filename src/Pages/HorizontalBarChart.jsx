import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const HorizontalBarChart = ({ ratings }) => {
  return (
    <div className="w-full h-96 pb-10 border-b-2 border-gray-200">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratings}
        >
          
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed/>
          <Tooltip />
          <Bar dataKey="count" barSize={25} fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBarChart;
