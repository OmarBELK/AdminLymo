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
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { styled } from "@mui/material/styles";
import CustomNoRowsOverlay from "../../components/CustomNoRowsOverlay";

const rows = [
  {
    id: 1,
    projectName: "Morgan-Gonzalez",
    building: "B",
    floor: 2,
    area: 85,
    status: "Available",
  },
  {
    id: 2,
    projectName: "Lee, Mcguire and Washington",
    building: "B",
    floor: 11,
    area: 76,
    status: "Not Available",
  },
  {
    id: 3,
    projectName: "Hall Inc",
    building: "B",
    floor: 3,
    area: 124,
    status: "Not Available",
  },
  {
    id: 4,
    projectName: "Underwood-Brandt",
    building: "B",
    floor: 5,
    area: 63,
    status: "Available",
  },
  {
    id: 5,
    projectName: "Rodriguez-Johnson",
    building: "A",
    floor: 16,
    area: 99,
    status: "Available",
  },
  {
    id: 6,
    projectName: "Moore-Duran",
    building: "B",
    floor: 19,
    area: 147,
    status: "Not Available",
  },
  {
    id: 7,
    projectName: "Craig-Carpenter",
    building: "A",
    floor: 11,
    area: 77,
    status: "Available",
  },
  {
    id: 8,
    projectName: "Kerr-Jennings",
    building: "B",
    floor: 6,
    area: 84,
    status: "Not Available",
  },
  {
    id: 9,
    projectName: "Murphy-Carrillo",
    building: "B",
    floor: 4,
    area: 75,
    status: "Available",
  },
  {
    id: 10,
    projectName: "Russell-Chavez",
    building: "A",
    floor: 20,
    area: 184,
    status: "Available",
  },
];

const columns = [
  { field: "id", headerName: "#", width: 90 },
  { field: "projectName", headerName: "Project Name", width: 150 },
  { field: "building", headerName: "Building Number", width: 150 },
  { field: "floor", headerName: "Floor", width: 150 },
  { field: "area", headerName: "Area (sq. ft.)", width: 150 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Typography
        sx={{
          color: params.value.toLowerCase() === "available" ? "blue" : "red",
        }}
      >
        {params.value}
      </Typography>
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

const AllAssets = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [searchText, setSearchText] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    setFilteredRows(
      rows.filter((row) => row.name.toLowerCase().includes(value))
    );
  };

  return (
    <Container
      className="min-h-screen"
      maxWidth="xl"
      sx={{
        mt: 5,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#3F434A",
          fontSize: "24px",
          mb: "10px",
        }}
      >
        All Assets
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          mb: "20px",
        }}
      >
        <div>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Project Name: <b>All</b>
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Building Letter: <b>All</b>
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Floor: <b>All</b>
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Status: <b>All</b>
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      <Box style={{ minHeight: 600, width: "100%" }}>
        {/* <Box sx={{ py: "16px", display: "flex", alignItems: "center" }}>
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
        </Box> */}
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

export default AllAssets;
