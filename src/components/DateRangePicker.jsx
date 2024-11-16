import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box, Button, InputAdornment, Popover, TextField } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { format } from "date-fns";

const DateRangePickerComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (ranges) => {
    setSelectedRange([ranges.selection]);
  };

  const formatDate = (date) => {
    return format(date, "dd MMM");
  };

  const open = Boolean(anchorEl);
  const id = open ? "date-range-picker-popover" : undefined;

  return (
    <div>
      <TextField
        sx={{
          width: "100%",
          borderRadius: "8px",
          height: "45px",
        }}
        InputProps={{
          style: {
            height: "34px",
            width: "180px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <CalendarMonthOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onClick={handleOpen}
        value={`${formatDate(selectedRange[0].startDate)} - ${formatDate(
          selectedRange[0].endDate
        )}`}
        readOnly
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box p={2}>
          <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={selectedRange}
          />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Done
            </Button>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default DateRangePickerComponent;
