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
import { MoveUp } from "lucide-react";

const data = [
  { month: "Jan", JohnDoe: 1000, JannyDoe: 850, JaneDoe: 700 },
  { month: "Feb", JohnDoe: 2000, JannyDoe: 1200, JaneDoe: 650 },
  { month: "Mar", JohnDoe: 1000, JannyDoe: 1000, JaneDoe: 1000 },
  { month: "Apr", JohnDoe: 500, JannyDoe: 1500, JaneDoe: 1100 },
  { month: "May", JohnDoe: 1500, JannyDoe: 1200, JaneDoe: 1400 },
  { month: "Jun", JohnDoe: 1850, JannyDoe: 2200, JaneDoe: 1700 },
];

const salesData = [
  {
    name: "John Doe",
    sales: 5850,
    color: "rgba(48, 79, 253,0.3)", // light blue
    iconColor: "#304FFD", // blue for the arrow icon
  },
  {
    name: "Janny Doe",
    sales: 3850,
    color: "rgba(255, 106, 25, 0.3)", // light orange
    iconColor: "#FF6A19", // orange for the arrow icon
  },
  {
    name: "Janny Doe",
    sales: 2200,
    color: "rgba(25, 255, 48, 0.3)", // light green
    iconColor: "#19FF30", // green for the arrow icon
  },
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

const PerformanceGraph = () => {
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
          <Box className="flex justify-between items-center py-5 gap-10">
            <Box className="flex-1">
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#3F434A",
                  fontSize: "18px",
                }}
              >
                Sales by sales person
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
                  value="Week"
                  aria-label="week"
                  sx={{
                    borderRadius: "15px",
                  }}
                >
                  Weekly
                </CustomToggleButton>
                <CustomToggleButton value="Month" aria-label="month">
                  Monthly
                </CustomToggleButton>
                <CustomToggleButton value="Year" aria-label="year">
                  Quaterly
                </CustomToggleButton>
              </CustomToggleButtonGroup>
            </Box>
          </Box>
          <Box className="flex justify-start gap-16 mb-10">
            {/* <Box className="text-[#615E83] flex gap-2 items-center">
                <Box className="w-3 h-3 bg-[#6D3AFF] rounded-full"></Box>
                Leads
              </Box>
              <Box className="text-[#615E83] flex gap-2 items-center">
                <Box className="w-3 h-3 bg-[#FF6A19] rounded-full"></Box>
                Client
              </Box> */}

            {salesData.map((person, index) => (
              <Box
                className="sales-card"
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    color: person.iconColor,
                    backgroundColor: person.color,
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <MoveUp />
                </Box>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "#3F434A",
                      fontSize: "18px",
                    }}
                  >
                    ${person.sales}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#3F434A",
                      fontSize: "16px",
                    }}
                  >
                    {person.name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box height={400}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
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
              <Area
                type="monotone"
                dataKey="JohnDoe"
                stroke="#304FFD"
                fill="rgba(48, 79, 253,0.3)"
                dot={{ r: 6 }}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="JannyDoe"
                stroke="#FF6A19"
                fill="rgba(255, 106, 25, 0.3)"
                dot={{ r: 6 }}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="JaneDoe"
                dot={{ r: 6 }}
                strokeWidth={2}
                stroke="#19FF30"
                fill="rgba(25, 255, 48, 0.3)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default PerformanceGraph;
