import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import DateRangePickerComponent from "./DateRangePicker";
import { styled } from "@mui/system";

const data = [
  { name: "Izdihar", sales: 20000 },
  { name: "Qods", sales: 33567 },
  { name: "Yasmin", sales: 15000 },
  { name: "Yasmin", sales: 25000 },
  { name: "Yamal", sales: 10000 },
];

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "#1E1B39",
    color: "#ffffff !important",
    "&:hover": {
      backgroundColor: "#1E1B39 !important",
    },
  },
  "&.MuiToggleButton-root": {
    borderColor: "transparent",
    width: "85px",
    height: "37px",
    borderRadius: "13px",
    color: "#9291A5",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    height: "50px",
    backgroundColor: "#F8F8FF",
    borderRadius: "15px",
    "&.Mui-selected": {
      backgroundColor: "#1E1B39",
      p: "5px",
    },
  },
}));

function SalesChart() {
  const [timeRange, setTimeRange] = React.useState("Day");

  const handleTimeRangeChange = (event, newTimeRange) => {
    if (newTimeRange !== null) {
      setTimeRange(newTimeRange);
    }
  };
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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
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
              Sales by Project
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <CustomToggleButtonGroup
            value={timeRange}
            exclusive
            onChange={handleTimeRangeChange}
            aria-label="time range"
            sx={{
              backgroundColor: "#F8F8FF",
              p: "10px",
              borderRadius: "15px",
            }}
          >
            <CustomToggleButton
              value="Day"
              aria-label="day"
              sx={{
                borderRadius: "15px",
              }}
            >
              Sales
            </CustomToggleButton>
            <CustomToggleButton
              value="Week"
              aria-label="week"
              sx={{
                borderRadius: "15px",
              }}
            >
              Quality
            </CustomToggleButton>
          </CustomToggleButtonGroup>
        </Box>
      </Box>
      <Divider
        sx={{
          mt: "20px",
          mb: "20px",
        }}
      />
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="sales"
          fill="#FF6A19"
          stackId="stack"
          radius={[0, 0, 20, 20]}
          background={{ fill: "#F8F8FF" }}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              // fill={COLORS[index % COLORS.length]}
              radius={6}
            />
          ))}{" "}
        </Bar>
      </BarChart>
    </Box>
  );
}

const renderLegend = (props) => {
  const { payload } = props;
  console.log(payload);

  return (
    <ul
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "flex-end",
      }}
    >
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
        </li>
      ))}
    </ul>
  );
};

export default SalesChart;
