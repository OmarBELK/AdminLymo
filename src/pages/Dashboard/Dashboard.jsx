import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import DataTable from "../../components/DataTable";
import SalesChart from "../../components/SalesChart";
import CompletionChart from "../../components/CompletionChart";
import ClientsLeadsGraph from "../../components/ClientsLeadsGraph";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PersonIcon from "@mui/icons-material/Person";
import D1 from "../../assets/d1.svg";
import D2 from "../../assets/d2.svg";
import D4 from "../../assets/d4.svg";
const data = [
  {
    title: "Total Turnover",
    value: "$573.43",
    icon: <img src={D1} />,
    color: "#1B2559",
  },
  {
    title: "Total apps sold",
    value: "1045",
    icon: <img src={D2} />,
    color: "#1B2559",
  },
  {
    title: "Average sold",
    value: "605",
    icon: <img src={D2} />,
    color: "#1B2559",
  },
  {
    title: "Villas sold",
    value: "321",
    icon: (
      <Box
        sx={{
          backgroundColor: "#FF6A19",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={D4} />
      </Box>
    ),
  },
];

const DataCard = ({ title, value, icon, color }) => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      padding: 4,
      borderRadius: 2,
      backgroundColor: "#fff",
      gap: 3,
    }}
  >
    <Box>{icon}</Box>
    <Box>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "#A3AED0",
          fontSize: "12px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: "#1B2559",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

function Dashboard() {
  return (
    // <Container
    //   sx={{
    //     mt: 5,
    //     mx: 0,
    //   }}
    // >
    <Box
      // container
      spacing={3}
      sx={{
        mx: 0,
        width: "100%",
        backgroundColor: "rgba(245, 245, 245, 1)",
      }}
    >
      <Container className="mb-6 mx-0" maxWidth="xl" sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 5,
            gap: 5,
          }}
        >
          {data.map((item, index) => (
            <DataCard key={index} {...item} />
          ))}
        </Box>
        <ClientsLeadsGraph />
        <Grid item className="flex justify-between gap-5" xs={12}>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <SalesChart />
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <CompletionChart />
          </Box>
        </Grid>
      </Container>
    </Box>
    // </Container>
  );
}

export default Dashboard;
