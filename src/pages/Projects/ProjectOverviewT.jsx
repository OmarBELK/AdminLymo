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
  LinearProgress,
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
    name: "Morgan-Gonzalez",
    telephone: "12838122",
    building: "001",
    apartment: "abc",
    lastPayment: "2500",
    progress: 80,
  },
  {
    id: 2,
    name: "Morgan-Gonzalez",
    telephone: "12838122",
    building: "001",
    apartment: "abc",
    lastPayment: "2500",
    progress: 80,
  },
  {
    id: 3,
    name: "Morgan-Gonzalez",
    telephone: "12838122",
    building: "001",
    apartment: "abc",
    lastPayment: "2500",
    progress: 80,
  },
  {
    id: 4,
    name: "Morgan-Gonzalez",
    telephone: "12838122",
    building: "001",
    apartment: "abc",
    lastPayment: "2500",
    progress: 80,
  },
  {
    id: 5,
    name: "Morgan-Gonzalez",
    telephone: "12838122",
    building: "001",
    apartment: "abc",
    lastPayment: "2500",
    progress: 80,
  },
  {
    id: 6,
    name: "Morgan-Gonzalez",
    telephone: "12838122",
    building: "001",
    apartment: "abc",
    lastPayment: "2500",
    progress: 80,
  },
  {
    id: 7,
    name: "Morgan-Gonzalez",
    telephone: "12838122",
    building: "001",
    apartment: "abc",
    lastPayment: "2500",
    progress: 80,
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "NOM", flex: 1 },
  { field: "telephone", headerName: "TELEPHONE #", width: 150 },
  { field: "building", headerName: "IMMEUBLE #", width: 150 },
  { field: "apartment", headerName: "APT #", width: 150 },
  { field: "lastPayment", headerName: "DERNIERE PAIEMENT", width: 150 },
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

const ProjectOverviewT = () => {
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
    <Box
      maxWidth="xl"
      className="min-h-screen"
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
        Project overview
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
              Name: <b>All</b>
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
              Apartment: <b>All</b>
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
              Building: <b>All</b>
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
      <Box style={{ width: "100%" }}>
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
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ noRowsOverlay: CustomNoRowsOverlay }}
          sx={{ "--DataGrid-overlayHeight": "300px" }}
        />
      </Box>
    </Box>
  );
};

export default ProjectOverviewT;
