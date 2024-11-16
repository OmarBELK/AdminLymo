import {
  Box,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Izdihar", progress: 89 },
  { name: "Qods", progress: 52 },
  { name: "Yasmin", progress: 28 },
  { name: "Yamals", progress: 10 },
];

const COLORS = ["#FF6A19", "#9291A5", "#9291A5", "#9291A5"]; // Define the colors for the bars

function CompletionChart() {
  return (
    <Box
      className="bg-white rounded-xl shadow-xl"
      sx={{
        mt: 5,
        p: "25px",
        height: "400px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(146, 145, 165, 1)",
        }}
      >
        <Typography>Statistics</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(30, 27, 57, 1)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          Payment Progress
        </Typography>
      </Box>
      <Divider
        sx={{
          mt: "20px",
        }}
      />
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis dataKey="name" type="category" width={60} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar
            dataKey="progress"
            fill="#8884d8"
            barSize={20}
            background={{ fill: "#F8F8FF" }}
            radius={6}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                radius={6}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            color: entry.color,
            display: "flex",
            gap: "15px",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: entry.color,
                borderRadius: "50%",
              }}
            ></div>
            {entry.value}
          </span>
          <span
            style={{
              color: "rgba(97, 94, 131, 1)",
            }}
          >
            {entry.payload.percent * 100}%
          </span>
          <span
            style={{
              color:
                entry.payload.percent * 100 > 50
                  ? "rgba(4, 206, 0, 1)"
                  : "rgba(209, 41, 83, 1)",
            }}
          >
            (+{0.14}%)
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CompletionChart;
