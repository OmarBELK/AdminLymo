import React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomNoRowsOverlay from "../../components/CustomNoRowsOverlay";

const rows = [
  {
    id: 1,
    name: "John",
    lastName: "Morgan-Gonzalez",
    sales: 2500,
    progress: 80,
  },
  {
    id: 2,
    name: "Jane",
    lastName: "Morgan-Gonzalez",
    sales: 2500,
    progress: 80,
  },
  {
    id: 3,
    name: "Alice",
    lastName: "Morgan-Gonzalez",
    sales: 2500,
    progress: 80,
  },
  {
    id: 4,
    name: "Bob",
    lastName: "Morgan-Gonzalez",
    sales: 2500,
    progress: 80,
  },
  {
    id: 5,
    name: "Charlie",
    lastName: "Morgan-Gonzalez",
    sales: 2500,
    progress: 80,
  },
  {
    id: 6,
    name: "David",
    lastName: "Morgan-Gonzalez",
    sales: 2500,
    progress: 80,
  },
  {
    id: 7,
    name: "Eve",
    lastName: "Morgan-Gonzalez",
    sales: 2500,
    progress: 80,
  },
];

const columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "sales", headerName: "Sales", flex: 1 },
  {
    field: "progress",
    headerName: "Payment Progress",
    width: 250,
    renderCell: (params) => (
      <Box
        sx={{
          width: "80%",
          px: "10px",
          height: "100%",
          mt: "10px",
        }}
      >
        <LinearProgress
          sx={{
            backgroundColor: "#D9D9D9",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#FF6A19",
            },
            height: 15,
            borderRadius: 5,
          }}
          variant="determinate"
          value={params.value}
        />
        <Typography variant="body2" sx={{ textAlign: "right" }}>
          {`${params.value}%`}
        </Typography>
      </Box>
    ),
  },
];

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.columnHeader}`]: {
    backgroundColor: "#EEEEEE",
    color: "#171C26",
  },
  [`& .${gridClasses.footerContainer}`]: {
    backgroundColor: "#fff",
    color: "#171C26",
  },
  [`& .${gridClasses.row}`]: {
    backgroundColor: "#fff",
    color: "#171C26",
  },
}));

function DataTable() {
  return (
    <Container maxWidth="xl" sx={{ width: "100%" }}>
      <StripedDataGrid
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        sx={{ "--DataGrid-overlayHeight": "300px" }}
      />
    </Container>
  );
}

export default DataTable;
