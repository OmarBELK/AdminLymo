import React from "react";
import { Box, Container, Grid } from "@mui/material";
import SalesChart from "../../components/SalesChart";
import CompletionChart from "../../components/CompletionChart";
import ClientsLeadsGraph from "../../components/ClientsLeadsGraph";
import DataTable from "./TableData";
import PerformanceGraph from "./Chart";

const Performance = () => {
  return (
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
        <PerformanceGraph />
      </Container>
      <Grid
        item
        xs={12}
        sx={{
          my: 5,
        }}
      >
        <DataTable />
      </Grid>
    </Box>
  );
};

export default Performance;
