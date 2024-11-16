import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import Header from "../../assets/Header.jpg";
import LoginIcon from "../../assets/LoginIcon.svg";
import Logo from "../../assets/Logo.png";
import Logo1 from "../../assets/Logo1.png";

const Login = () => {
  return (
    <Box className="w-full relative bg-base-white h-[1024px] overflow-hidden text-left text-xs text-gray-gray-400 font-roboto">
      <img
        className="absolute top-[0px] left-[0px] w-full h-1/2 object-cover"
        alt=""
        src={Header}
      />
      <div className="absolute top-[1079px] left-[235px] w-[1044px] h-[18px]">
        <div className="absolute top-[0px] left-[721.5px] w-[322.5px] h-[18px]">
          <div className="absolute top-[0px] left-[281px] leading-[150%] inline-block w-[41.5px] h-[18px]">
            License
          </div>
          <div className="absolute top-[0px] left-[212.5px] leading-[150%] inline-block w-[24.5px] h-[18px]">
            Blog
          </div>
          <div className="absolute top-[0px] left-[111.5px] leading-[150%] inline-block w-[57px] h-[18px]">
            Simmmple
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[150%] inline-block w-[67.5px] h-[18px]">
            Creative Tim
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[372.5px] h-[18px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%] inline-block w-[372.5px] h-[18px]">
            <span>{`@ 2021, Made with ❤️ by `}</span>
            <b className="text-lightseagreen">Creative Tim</b>
            <span>{` & `}</span>
            <b className="text-lightseagreen">Simmmple</b>
            <span> for a better web</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[977px] left-[534px] w-[372.5px] h-[18px] text-center">
        <div className="absolute top-[0px] left-[0px] leading-[150%] inline-block w-[372.5px] h-[18px]">
          @ 2024 ERP system, All rights reserved
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_256px)] left-[calc(50%_-_200px)] shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.1),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.04)] rounded-xl bg-base-white w-[400px] overflow-hidden flex flex-col items-center justify-start text-lg text-gray-900 font-text-md-semibold">
        <div className="self-stretch bg-base-white flex flex-col items-center justify-start relative text-center">
          <div className="self-stretch bg-base-white flex flex-col items-center justify-start pt-6 px-6 pb-0 gap-[16px] z-[0]">
            <img
              className="w-12 relative rounded-3xs h-12"
              alt=""
              src={LoginIcon}
            />

            <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
              <div className="self-stretch relative leading-[28px] font-semibold">
                Log in to your account
              </div>
              <div className="self-stretch relative text-sm leading-[20px] text-gray-600">
                Welcome back! Please enter your details.
              </div>
            </div>
          </div>
          <Box className="!m-[0] absolute top-[16px] right-[16px] rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5 z-[1]">
            {/* <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/xclose.svg"
            /> */}
            <CloseIcon className="cursor-pointer" />
          </Box>
          <div className="self-stretch h-5 z-[2]" />
          <img
            className="w-[400px] relative max-w-full overflow-hidden h-px shrink-0 hidden z-[3]"
            alt=""
            src="/divider.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-6 text-sm text-darkslateblue">
          <div className="self-stretch rounded-xl flex flex-col items-center justify-start gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative leading-[20px] font-medium">
                    Email
                  </div>
                  <TextField
                    id="filled-password-input"
                    size="small"
                    placeholder="Enter your email"
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
                <div className="w-80 relative leading-[20px] text-gray-600 hidden">
                  This is a hint text to help user.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-medium">
                  Password
                </div>
                <TextField
                  id="filled-password-input"
                  size="small"
                  type="password"
                  placeholder="*******"
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
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-row items-center justify-start">
                <Checkbox
                  sx={{
                    ml: "-12px",
                  }}
                />
                <div className="">Remember for 30 days</div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-center text-darkslategray">
                <div className="relative leading-[20px] font-semibold cursor-pointer">
                  Forgot password
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-8 px-0 pb-0 text-base text-base-white">
          <div className="w-[560px] hidden flex-col items-start justify-start pt-0 px-0 pb-6 box-border">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
              alt=""
              src="/divider.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-6 pb-6 gap-[12px]">
            <Button
              sx={{
                py: "10px",
                color: "#fff",
                backgroundColor: "rgba(48, 49, 51, 1)",
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                ":hover": {
                  backgroundColor: "rgba(48, 49, 51, 1)",
                },
              }}
            >
              Confirm
            </Button>
            <Button
              sx={{
                py: "10px",
                color: "rgba(5, 40, 95, 1)",
                backgroundColor: "#fff",
                border: "1px solid rgba(208, 213, 221, 1)",
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                ":hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-[-5px] left-[14px] w-[140px] h-[118px] text-[20px] text-base-white">
        <img
          className="absolute top-[0px] left-[22px] h-[118px] object-cover"
          alt=""
          src={Logo1}
        />
      </div>
    </Box>
  );
};

export default Login;
