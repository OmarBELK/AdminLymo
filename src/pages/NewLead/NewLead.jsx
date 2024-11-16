import {
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Upload from "../../assets/Upload.svg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomFileUpload from "../../components/CustomFileUpload";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: #000;
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const InputField = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col flex-1 justify-center px-1.5">
    <div className="flex flex-col justify-center">
      <div className="flex flex-col">
        <label className="text-sm leading-5 text-slate-700 mb-2">{label}</label>
        <TextField
          id="filled-password-input"
          size="small"
          placeholder={placeholder}
          autoComplete="current-password"
          sx={{
            width: "100%",
            borderRadius: "8px",
            height: "45px",
          }}
          inputProps={{
            style: {
              height: "34px",
            },
          }}
        />
      </div>
    </div>
  </div>
);

const SelectField = ({ label, options, placeholder }) => (
  <div className="flex flex-col justify-center max-md:mx-2.5 w-full px-1.5">
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col w-full">
        <label className="text-sm leading-5 text-slate-700 mb-2">{label}</label>
        <Select
          placeholder={placeholder}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{
            width: "100%",
            borderRadius: "8px",
            height: "45px",
          }}
          inputProps={{
            style: {
              height: "34px",
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    </div>
  </div>
);

const TextareaField = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col flex-1 justify-center px-1.5">
    <div className="flex flex-col justify-center">
      <div className="flex flex-col">
        <label className="text-sm leading-5 text-slate-700 mb-2">{label}</label>
        <Textarea
          minRows={10}
          aria-label="maximum height"
          placeholder={placeholder}
        />
      </div>
    </div>
  </div>
);

function NewLead() {
  return (
    // <Box className="flex flex-col bg-neutral-100 font-roboto w-full">
    // <main className="w-full max-md:max-w-full">
    <div className="flex w-full gap-5 max-md:flex-col max-md:gap-0 font-roboto">
      <Box className="flex flex-col mx-5 w-full max-md:ml-0 max-md:w-full">
        <Box
          className="flex flex-col pt-7 pb-1 my-auto w-full bg-white rounded-xl shadow-xl"
          sx={{
            mt: 5,
          }}
        >
          <div className="mx-6 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <form className="flex flex-col grow px-2.5 py-7 w-full font-medium bg-white rounded-xl max-md:mt-6 max-md:max-w-full">
                <h2 className="text-lg font-semibold leading-7 text-gray-900 max-md:max-w-full">
                  Lead Form
                </h2>
                <div className="flex gap-0 justify-center mt-5 max-md:flex-wrap">
                  <InputField
                    label="First name"
                    placeholder="Enter first name"
                  />
                  <InputField label="Last name" placeholder="Enter Last name" />
                </div>
                <div className="flex gap-0 justify-center mt-5 max-md:flex-wrap">
                  <InputField label="Card ID" placeholder="Enter CNIC" />
                  <div className="flex flex-col flex-1 justify-center px-1.5">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col">
                        <label className="text-sm leading-5 text-slate-700 mb-2">
                          Date of Birth
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            sx={{
                              width: "100%",
                              borderRadius: "8px",
                              // height: "45px",
                              "& .MuiInputBase-input": {
                                height: "35px",
                              },
                            }}
                            slotProps={{ textField: { size: "small" } }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-5 max-md:max-w-full">
                  <div className="flex flex-col justify-center max-md:max-w-full">
                    <div className="flex flex-col justify-center max-md:max-w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <InputField
                          label="Address"
                          placeholder="Enter Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0 justify-center mt-5 max-md:flex-wrap">
                  <InputField
                    label="Telephone"
                    placeholder="Enter telephone"
                    type="tel"
                  />
                  <InputField
                    label="Email address"
                    placeholder="Enter email address"
                    type="email"
                  />
                </div>
                <div className="flex gap-0 justify-center mt-5 max-md:flex-wrap">
                  <SelectField
                    label="Project name"
                    options={["Project A", "Project B", "Project C"]}
                    placeholder="Select project name"
                  />
                </div>
                <div className="flex gap-0 justify-center mt-5 max-md:flex-wrap">
                  <InputField label="Budget" placeholder="Enter first name" />
                  <InputField
                    label="Preferred Location"
                    placeholder="Enter Last name"
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 max-md:max-w-full">
                  <div className="flex flex-col justify-center max-md:max-w-full">
                    <div className="flex flex-col justify-center max-md:max-w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <TextareaField
                          label="Comment or notes"
                          placeholder="Entrez des commentaires ou des questions"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col justify-center pt-7 max-md:max-w-full">
              <div className="flex flex-col pb-6 max-md:max-w-full">
                <div className="shrink-0 h-px bg-gray-200 max-md:max-w-full" />
              </div>
              <div className="flex flex-col px-6 pb-5 text-base font-semibold leading-6 whitespace-nowrap max-md:px-5 max-md:max-w-full">
                <div className="flex gap-3 pl-20 max-md:flex-wrap max-md:pl-5 justify-end">
                  <button className="justify-center px-5 py-2.5 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700">
                    Cancel
                  </button>
                  <button className="justify-center px-5 py-2.5 text-white rounded-lg border border-solid shadow-sm bg-zinc-800 border-zinc-800">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
    // </main>
    // </Box>
  );
}

export default NewLead;
