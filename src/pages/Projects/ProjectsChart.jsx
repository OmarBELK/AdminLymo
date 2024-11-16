// src/components/ClientsLeadsGraph.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Card,
  CardContent,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

const data = [
  { month: "Jan", sales: 1000 },
  { month: "Feb", sales: 1500 },
  { month: "Mar", sales: 1200 },
  { month: "Apr", sales: 1700 },
  { month: "May", sales: 2200 },
  { month: "Jun", sales: 3400 },
  { month: "Jul", sales: 2800 },
  { month: "Aug", sales: 3348 },
  { month: "Sep", sales: 2000 },
  { month: "Oct", sales: 1500 },
  { month: "Nov", sales: 2400 },
  { month: "Dec", sales: 3700 },
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

const ProjectsChart = () => {
  const [timeRange, setTimeRange] = React.useState("Month");

  const handleTimeRangeChange = (event, newTimeRange) => {
    if (newTimeRange !== null) {
      setTimeRange(newTimeRange);
    }
  };

  return (
    <Box
      sx={{
        mt: 5,
      }}
      className="bg-white rounded-xl shadow-xl"
    >
      <Box>
        <Box className="px-5">
          <Box className="flex justify-between items-center py-5 gap-5">
            <Box className="flex-1">
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#1E1B39",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Sales report
              </Typography>
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
                  Day
                </CustomToggleButton>
                <CustomToggleButton
                  value="Week"
                  aria-label="week"
                  sx={{
                    borderRadius: "15px",
                  }}
                >
                  Week
                </CustomToggleButton>
                <CustomToggleButton value="Month" aria-label="month">
                  Month
                </CustomToggleButton>
              </CustomToggleButtonGroup>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: "-5px",
              mb: 6,
            }}
          />
        </Box>

        <Box height={400}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              // width={600}
              height={400}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid verticalPoints={[3, 3]} />
              <XAxis dataKey="date" stroke="#615E83" axisLine={false} />
              <YAxis stroke="#615E83" axisLine={false} />

              <Tooltip />
              {/* <Legend layout="horizontal" verticalAlign="top" align="center" /> */}
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#FF718B"
                fill="rgba(255, 106, 25, 0.3)"
                dot={{ r: 0 }}
                strokeWidth={2}
                strokeDasharray="6 6"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsChart;
