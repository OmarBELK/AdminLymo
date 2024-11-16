// src/CustomFileUpload.js
import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CustomFileUpload = () => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        border: "2px dashed #d3d3d3",
        padding: "10px",
        textAlign: "center",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "400px",
        cursor: "pointer",
      }}
    >
      <CloudUploadIcon sx={{ fontSize: "48px", color: "#d3d3d3" }} />
      <Typography variant="body1" sx={{ marginTop: "10px", color: "#999" }}>
        Drag and Drop or{" "}
        <a
          href=""
          style={{
            color: "rgba(48, 79, 253, 1)",
          }}
        >
          Browse
        </a>{" "}
        to upload
      </Typography>
      {fileName && (
        <Typography variant="body2" sx={{ marginTop: "10px", color: "#555" }}>
          {fileName}
        </Typography>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default CustomFileUpload;
