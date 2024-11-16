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
    immueble: "Lorem ipsum dummy",
    nomApp: "Lorem ipsuma",
    noVendus: 2500,
    progress: 80,
  },
  {
    id: 1,
    immueble: "Lorem ipsum dummy",
    nomApp: "Lorem ipsuma",
    noVendus: 2500,
    progress: 80,
  },
  {
    id: 2,
    immueble: "Lorem ipsum dummy",
    nomApp: "Lorem ipsuma",
    noVendus: 2500,
    progress: 80,
  },
  {
    id: 3,
    immueble: "Lorem ipsum dummy",
    nomApp: "Lorem ipsuma",
    noVendus: 2500,
    progress: 80,
  },
  {
    id: 4,
    immueble: "Lorem ipsum dummy",
    nomApp: "Lorem ipsuma",
    noVendus: 2500,
    progress: 80,
  },
  {
    id: 5,
    immueble: "Lorem ipsum dummy",
    nomApp: "Lorem ipsuma",
    noVendus: 2500,
    progress: 80,
  },
  {
    id: 6,
    immueble: "Lorem ipsum dummy",
    nomApp: "Lorem ipsuma",
    noVendus: 2500,
    progress: 80,
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "immueble", headerName: "IMMUEBLE", flex: 1 },
  { field: "nomApp", headerName: "NOM DE'APP", flex: 1 },
  { field: "noVendus", headerName: "NO VENDUS", flex: 1 },
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

const ProjectOverT = () => {
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

export default ProjectOverT;
