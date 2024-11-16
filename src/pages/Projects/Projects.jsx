import React, { useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Ellipsis, Search } from "lucide-react";
import ClientsLeadsGraph from "../../components/ClientsLeadsGraph";
import CompletionChart from "../../components/CompletionChart";
import SalesChart from "../../components/SalesChart";
import ProjectsChart from "./ProjectsChart";
import ProjectOverviewT from "./ProjectOverviewT";
import ProjectOverT from "./ProjectOverT";
import Map from "./Map";

const ps = [
  "Project 001",
  "Project 002",
  "Project 003",
  "Project 004",
  "Project 005",
  "Project 006",
  "Project 007",
  "Project 008",
  "Project 009",
];

const Projects = () => {
  const [selectedP, setSelectedP] = useState(0);
  return (
    <Box className="flex w-full">
      <Box
        sx={{
          width: "25%",
          backgroundColor: "#fff",
        }}
      >
        <Box className="flex justify-between p-3">
          <Typography
            sx={{
              color: "#171C1B",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Projects
          </Typography>
          <Ellipsis
            style={{
              color: "#ACB9B8",
            }}
          />
        </Box>
        <Box className="flex justify-between p-3">
          <Box
            className="flex p-2 w-full gap-3"
            sx={{
              border: "1px solid #E3E8E7",
              borderRadius: "20px",
            }}
          >
            <Search
              style={{
                color: "#758A88",
              }}
            />
            <input
              className="border-none outline-none"
              placeholder="Search for Projects..."
            />
          </Box>
        </Box>
        {ps.map((p, i) => (
          <Box
            onClick={() => {
              setSelectedP(i);
            }}
            className="pl-4 pr-4 hover:bg-[#F9CEB6] cursor-pointer transition-all"
            sx={{
              backgroundColor: i === selectedP ? "#F9CEB6" : "#fff",
              borderLeft: i === selectedP ? "5px solid #FF6A19" : "0",
              "&:hover": {
                borderLeft: "5px solid #FF6A19",
              },
            }}
          >
            <Box
              className="flex items-center justify-between"
              sx={{
                borderBottom: "1px solid #E3E8E7",
                height: "80px",
              }}
            >
              <Typography
                sx={{
                  color: "#171C1B",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {p}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: "75%",
          px: 3,
          // backgroundColor: "red",
        }}
      >
        <Map />
        <ProjectOverT />
        <ProjectsChart />
        <ProjectOverviewT />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Projects;
