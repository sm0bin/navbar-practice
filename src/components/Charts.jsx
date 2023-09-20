import React from "react";
import SimpleLineChart from "./SimpleLineChart";
import StackedBarChart from "./StackedBarChart";

const Charts = () => {
  return (
    <div className="lg:flex gap-6  max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto my-10">
      <SimpleLineChart></SimpleLineChart>
      <StackedBarChart></StackedBarChart>
    </div>
  );
};

export default Charts;
