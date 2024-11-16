import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Dashboard from "../../assets/W_Dashboard.svg";
import AllAssets from "../../assets/W_AllAssets.svg";
import Client from "../../assets/W_Client.svg";
import Clients from "../../assets/clients.svg";
import Clender from "../../assets/calender.svg";
import Performance from "../../assets/Performance 1.svg";
import Projects from "../../assets/Projects.svg";
import { styled } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const StyledListItem = styled(ListItemButton)(({ theme }) => ({
  position: "relative",
  "&:hover::after": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: "#FF5722", // Customize this color to your preference
  },
  "&&.Mui-selected::after": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: "#FF5722",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: "#FF5722", // Customize this color to your preference
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
}));

const Sidebar = () => {
  const location = useLocation();
  const sections = [
    "Dashboard",
    "All Projects",
    "Performance",
    "All Assets",
    "All Clients",
    "Calender",
  ];
  const links = [
    "/",
    "/projects",
    "/performance",
    "/all-assets",
    "/all-clients",
    "/calender",
  ];
  const icons = [Dashboard, Projects, Performance, AllAssets, Clients, Clender];
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Drawer
      sx={{
        width: location.pathname !== "/projects" ? drawerWidth : 56,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: location.pathname !== "/projects" ? drawerWidth : 56,
          boxSizing: "border-box",
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List
        sx={{
          p: 0,
          mt: "64px",
          overflow: "hidden",
        }}
      >
        {sections.map((text, index) => (
          <StyledListItem
            selected={location.pathname === links[index]}
            onClick={(event) => handleListItemClick(event, index)}
            key={text}
            component={Link}
            to={links[index]}
          >
            <ListItemIcon>
              <img src={icons[index]} />
            </ListItemIcon>
            {location.pathname !== "/projects" && (
              <ListItemText
                primary={text}
                sx={{
                  ml: "-20px",
                }}
              />
            )}
          </StyledListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
