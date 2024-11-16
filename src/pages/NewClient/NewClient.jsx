import {
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
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
  <div className="flex flex-col justify-center px-6 mx-8 max-md:px-5 max-md:mx-2.5">
    <div className="flex flex-col justify-center">
      <div className="flex flex-col">
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

function NewClient() {
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
          <div className="mx-6 max-md:mx-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <form className="flex flex-col grow px-2.5 py-7 w-full font-medium bg-white rounded-xl shadow-xl max-md:mt-6 max-md:max-w-full">
                  <h2 className="text-lg font-semibold leading-7 text-gray-900 max-md:max-w-full">
                    Demographic Group
                  </h2>
                  <div className="flex gap-0 justify-center mt-5 max-md:flex-wrap">
                    <InputField
                      label="First name"
                      placeholder="Enter first name"
                    />
                    <InputField
                      label="Last name"
                      placeholder="Enter Last name"
                    />
                  </div>
                  <div className="flex gap-0 justify-center mt-5 max-md:flex-wrap">
                    <InputField label="CNIC" placeholder="Enter CNIC" />
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
                    <div className="flex flex-col justify-center px-1.5 max-md:max-w-full">
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
                </form>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col gap-5 grow px-2.5 py-7 w-full font-medium bg-white rounded-xl shadow-xl max-md:mt-6 max-md:max-w-full">
                  <h2 className="text-lg font-semibold leading-7 text-gray-900 max-md:max-w-full">
                    Project Group
                  </h2>
                  <SelectField
                    label="Project name"
                    options={["Project A", "Project B", "Project C"]}
                    placeholder="Select project name"
                  />
                  <SelectField
                    label="Block type"
                    options={["Type 1", "Type 2", "Type 3"]}
                    placeholder="Select block type"
                  />
                  <SelectField
                    label="Floor"
                    options={["1st Floor", "2nd Floor", "3rd Floor"]}
                    placeholder="Select floor"
                  />
                  <SelectField
                    label="Area"
                    options={["Area 1", "Area 2", "Area 3"]}
                    placeholder="Select Area"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col p-2.5 mx-5 mt-4 bg-white rounded-xl shadow-xl max-md:mr-2.5 max-md:max-w-full">
              <h2 className="text-lg font-semibold leading-7 text-gray-900 max-md:max-w-full">
                Financial Group
              </h2>
              <div className="flex flex-col mt-5 max-md:max-w-full">
                <div className="flex gap-0 justify-center pr-9 pl-3 font-medium max-md:flex-wrap max-md:pr-5">
                  <div className="w-1/3">
                    <InputField
                      label="Tranche 1"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="w-1/3">
                    <SelectField
                      label="Mode of Payment"
                      options={[]}
                      placeholder="Select Mode of Payment"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-1.5 w-1/3">
                    <div className="flex flex-col justify-center px-1.5">
                      <div className="flex flex-col justify-center">
                        <div className="flex flex-col">
                          <label className="text-sm leading-5 text-slate-700">
                            Date
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
                </div>
                <Box className="flex gap-5 justify-between px-5 my-5 text-sm font-semibold tracking-normal leading-5 text-right text-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full items-center">
                  <CustomFileUpload />
                  <Button
                    sx={{
                      py: "10px",
                      color: "#fff",
                      backgroundColor: "#FF5722",
                      borderRadius: "8px",
                      height: "40px",
                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                      ":hover": {
                        backgroundColor: "#FF5722",
                      },
                    }}
                  >
                    <AddIcon />
                    Add Another
                  </Button>
                </Box>
              </div>
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

export default NewClient;
