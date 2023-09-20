import axios from "axios";
import React, { useEffect, useState, PureComponent } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BrushBarChart = () => {
  const [productsData, setProductsData] = useState([]);
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then(console.log);

  //   axios({
  //     method: "get",
  //     url: "https://dummyjson.com/products",
  //     responseType: "stream",
  //   }).then(function (response) {
  //     console.log(response.data);
  //   });

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      const productsAll = res.data.products;
      setProductsData(productsAll);
    });
  }, []);

  return (
    <div className="bg-slate-100 text-slate-700 p-6 rounded-xl w-full">
      <ResponsiveContainer width={"99%"} height={500}>
        <BarChart
          width={500}
          height={300}
          data={productsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="title" height={30} stroke="#8884d8" />
          <Bar dataKey="price" fill="#8884d8" />
          <Bar dataKey="discountPercentage" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BrushBarChart;
