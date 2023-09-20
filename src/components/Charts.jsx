import React from "react";
import SimpleLineChart from "./SimpleLineChart";
import StackedBarChart from "./StackedBarChart";
import BrushBarChart from "./BrushBarChart";
import BrushBarChart2 from "./BrushBarChart2";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-6  max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto my-10">
      <SimpleLineChart></SimpleLineChart>
      <StackedBarChart></StackedBarChart>
      <BrushBarChart></BrushBarChart>
      <BrushBarChart2></BrushBarChart2>
    </div>
  );
};

export default Charts;
