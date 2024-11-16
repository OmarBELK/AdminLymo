// CustomDataGrid.js
import * as React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { styled } from "@mui/material/styles";
import CustomNoRowsOverlay from "../../components/CustomNoRowsOverlay";

const rows = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@example.co",
    phone: "123456789012",
    propertyType: "Apartment moyen standing",
    budget: 150,
    status: "intéressé",
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Curie",
    email: "marie.curie@example.com",
    phone: "123456789012",
    propertyType: "Villa",
    budget: 500,
    status: "Qualifié",
  },
  {
    id: 3,
    firstName: "Paul",
    lastName: "Martin",
    email: "paul.martin@example.co",
    phone: "123456789012",
    propertyType: "Apartment haut standing",
    budget: 300,
    status: "Qualifié",
  },
  {
    id: 4,
    firstName: "Sophie",
    lastName: "Bernard",
    email: "sophie.bernard@example.co",
    phone: "123456789012",
    propertyType: "Apartment social",
    budget: 100,
    status: "Converti",
  },
  {
    id: 5,
    firstName: "Luc",
    lastName: "Durand",
    email: "luc.durand@example.co",
    phone: "123456789012",
    propertyType: "Villa",
    budget: 450,
    status: "intéressé",
  },
  {
    id: 6,
    firstName: "Claire",
    lastName: "Dubois",
    email: "claire.dubois@example.co",
    phone: "123456789012",
    propertyType: "Apartment moyen standing",
    budget: 150,
    status: "intéressé",
  },
  {
    id: 7,
    firstName: "Marc",
    lastName: "Lefevre",
    email: "marc.lefevre@example.co",
    phone: "123456789012",
    propertyType: "Apartment haut standing",
    budget: 180,
    status: "Qualifié",
  },
  {
    id: 8,
    firstName: "Anne",
    lastName: "Simone",
    email: "anne.simone@example.co",
    phone: "123456789012",
    propertyType: "Apartment social",
    budget: 180,
    status: "Converti",
  },
  {
    id: 9,
    firstName: "Pierre",
    lastName: "Laurent",
    email: "pierre.laurent@example.co",
    phone: "123456789012",
    propertyType: "Apartment moyen standing",
    budget: 450,
    status: "intéressé",
  },
  {
    id: 10,
    firstName: "Laura",
    lastName: "Petit",
    email: "laura.petit@example.co",
    phone: "123456789012",
    propertyType: "Villa",
    budget: 800,
    status: "Qualifié",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "propertyType", headerName: "Property Type", flex: 1 },
  { field: "budget", headerName: "Budget", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding: "10px",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
            width: "100px",
            backgroundColor:
              params.value === "Qualifié"
                ? "rgba(0, 255, 25, 0.1)"
                : params.value === "Converti"
                ? "rgba(250, 0, 255, 0.1)"
                : "rgba(0, 133, 255, 0.1)",
            color:
              params.value === "Qualifié"
                ? "rgba(0, 255, 26, 1)"
                : params.value === "Converti"
                ? "rgba(250, 0, 255, 1)"
                : "rgba(0, 133, 255, 1)",
            borderRadius: "50px",
          }}
        >
          {params.value}
        </Box>
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

const AllLeads = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [searchText, setSearchText] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    setFilteredRows(
      rows.filter((row) => row.name.toLowerCase().includes(value))
    );
  };

  return (
    <Container
      maxWidth="xl"
      className="min-h-screen"
      sx={{
        mt: 5,
        width: "100%",
      }}
    >
      <Box style={{ minHeight: 600, width: "100%" }}>
        <Box sx={{ py: "16px", display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              boxShadow: "0px 2px 5px 0px rgba(89, 96, 120, 0.1)",
              width: "40px",
              height: "40px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              color: "rgba(70, 79, 96, 1)",
              // box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16);

              // box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
            }}
          >
            <FilterAltIcon />
          </IconButton>
          <Box>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              style={{
                marginLeft: "8px",
                width: "320px",
                backgroundColor: "#fff",
              }}
            />
          </Box>
        </Box>
        <StripedDataGrid
          autoHeight
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ noRowsOverlay: CustomNoRowsOverlay }}
          sx={{ "--DataGrid-overlayHeight": "300px" }}
        />
      </Box>
    </Container>
  );
};

export default AllLeads;
