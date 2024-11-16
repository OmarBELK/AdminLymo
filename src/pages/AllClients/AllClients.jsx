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
    clientName: "Morgan-Gonzalez",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 2,
    clientName: "Lee, Mcguire and Washington",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 3,
    clientName: "Hall Inc",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 4,
    clientName: "Underwood-Brandt",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 5,
    clientName: "Rodriguez-Johnson",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 6,
    clientName: "Moore-Duran",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 7,
    clientName: "Craig-Carpenter",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 8,
    clientName: "Kerr-Jennings",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 9,
    clientName: "Murphy-Carrillo",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
  {
    id: 10,
    clientName: "Russell-Chavez",
    dob: "10-05-1990",
    cnic: "10101-22112-2",
    group: "Group 001",
    progress: 80,
  },
];

const columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "clientName", headerName: "Client Name", flex: 1 },
  { field: "dob", headerName: "Date of Birth", width: 150 },
  { field: "cnic", headerName: "CNIC", width: 200 },
  { field: "group", headerName: "Project Group", width: 150 },
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

const AllClients = () => {
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
        All Clients
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
              Client Name: <b>All</b>
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
              CNIC: <b>All</b>
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
              Project Group: <b>All</b>
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
    </Container>
  );
};

export default AllClients;
