import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Logo1 from "../../assets/Logo1.png";
import Alarm from "../../assets/W_Alarms.svg";
import User from "../../assets/User.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#333", height: "64px", zIndex: "10000" }}
    >
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            // width: "140px",
            // height: "118px",
          }}
        >
          {/* <Typography>Logo</Typography> */}
          <img
            src={Logo1}
            alt="Logo"
            style={{
              position: "relative",
              width: "150px",
              // height: "118px",
              top: "-5px",
              left: "-47px",
              gap: "0px",
              opacity: "0px",
            }}
          />
        </Box>
        <IconButton color="inherit">
          <img src={Alarm} />
        </IconButton>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: "#EDEDED", ml: 1, mr: 3, my: 2 }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img src={User} />
          <Typography variant="body1" sx={{ marginLeft: "8px" }}>
            admin@email.com
          </Typography>
          <ArrowDropDownIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
