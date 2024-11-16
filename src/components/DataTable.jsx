import React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "address", headerName: "Address", flex: 1 },
];

const rows = [
  {
    id: 1,
    name: "Patrick Mills",
    phone: "+1-720-410-2124",
    email: "wrightmatthew@example.com",
    address: "072 April Road West Daniel, UT 99049",
  },
  {
    id: 2,
    name: "Matthew Fuller",
    phone: "601-461-9370",
    email: "taylor78@example.com",
    address: "3810 Thomas Key Suite 012",
  },
  {
    id: 3,
    name: "Paul Monroe",
    phone: "7372172675",
    email: "scott72@example.net",
    address: "0229 Smith Shore Suarezfort, OR 05843",
  },
  {
    id: 4,
    name: "Anthony Copeland",
    phone: "+1-959-817-7670",
    email: "adambrewer@example.com",
    address: "85452 David Flats Suite 906 New Kathryntown",
  },
  {
    id: 5,
    name: "Christopher Grimes",
    phone: "+1-959-817-7670",
    email: "richardholly@example.com",
    address: "5240 Ashley Cliff Suite 090",
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
