import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SimpleLineChart = () => {
  const chartData = [
    { month: "Jan", visitors: 2500, pageViews: 8000 },
    { month: "Feb", visitors: 2800, pageViews: 8500 },
    { month: "Mar", visitors: 3200, pageViews: 9000 },
    { month: "Apr", visitors: 3500, pageViews: 9500 },
    { month: "May", visitors: 4000, pageViews: 4600 },
    { month: "Jun", visitors: 4200, pageViews: 7400 },
    { month: "Jul", visitors: 4400, pageViews: 5500 },
    { month: "Aug", visitors: 4700, pageViews: 11500 },
    { month: "Sep", visitors: 5200, pageViews: 12000 },
    { month: "Oct", visitors: 5500, pageViews: 15000 },
    { month: "Nov", visitors: 5800, pageViews: 6000 },
    { month: "Dec", visitors: 6000, pageViews: 5000 },
  ];

  return (
    <div className="bg-slate-100  text-slate-700 p-6 rounded-xl w-full">
      <ResponsiveContainer width={"99%"} height={500}>
        <LineChart
          width={700}
          height={500}
          data={chartData}
          margin={{
            top: 24,
            right: 24,
            left: 12,
            bottom: 12,
          }}
        >
          <Line type="monotone" dataKey="visitors" stroke="red" />
          <Line type="monotone" dataKey="pageViews" stroke="blue" />
          <XAxis dataKey="month" stroke="green"></XAxis>
          <YAxis stroke="green"></YAxis>
          <Legend></Legend>
          <Tooltip></Tooltip>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
