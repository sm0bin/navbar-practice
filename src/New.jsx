// import { LineChart, Line } from "recharts";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const New = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 300,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 100,
      amt: 2100,
    },
  ];
  const websiteData = [
    {
      servicePlan: "Basic Plan",
      visitors: 250,
      pageViews: 800,
      bounceRate: 300,
    },
    {
      servicePlan: "Pro Plan",
      visitors: 500,
      pageViews: 1600,
      bounceRate: 250,
    },
    {
      servicePlan: "Premium Plan",
      visitors: 1000,
      pageViews: 3000,
      bounceRate: 200,
    },
  ];
  return (
    <div className="w-full mx-auto">
      <LineChart
        width={1000}
        height={500}
        data={websiteData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="servicePlan" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="visitors"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="pageViews" stroke="#82ca9d" />
        <Line type="monotone" dataKey="bounceRate" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default New;
