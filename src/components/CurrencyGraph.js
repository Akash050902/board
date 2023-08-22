import React from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
  { name: "0", Guest: 100, User: 200},
  { name: "Week 1", Guest: 410, User: 400},
  { name: "Week 2", Guest: 150, User: 200},
  { name: "Week 3", Guest: 440, User: 300},
  { name: "Week 4", Guest: 190, User: 220},
  { name: "", Guest: 250, User: 450},
];

const CurrencyGraph = () => {
  return (
    <LineChart width={600} height={300} data={data}>
         <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Guest" stroke="#9BDD7C" strokeWidth={3} />
      <Line
        type="monotone"
        dataKey="User"
        stroke="#E9A0A0"
        strokeWidth={3}
      />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
     
    </LineChart>
  );
};

export default CurrencyGraph;