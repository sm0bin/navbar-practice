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

const SimpleLineChart = () => {
  const websiteData = [
    {
      servicePlan: "Basic Plan",
      visitors: 2500,
      pageViews: 8000,
      bounceRate: 30,
    },
    {
      servicePlan: "Pro Plan",
      visitors: 5000,
      pageViews: 16000,
      bounceRate: 25,
    },
    {
      servicePlan: "Premium Plan",
      visitors: 10000,
      pageViews: 30000,
      bounceRate: 20,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
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
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
