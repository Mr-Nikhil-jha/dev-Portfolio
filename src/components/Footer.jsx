import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <footer className="fixed  bottom-0 left-0 w-full flex justify-center items-center h-24 bg-white/20 backdrop-blur-xl border-t border-white/30 shadow-lg rounded-t-2xl px-4 ">
        <div className="w-full max-w-lg flex flex-col items-center gap-3">
          <BottomNavigation
            style={{ backgroundColor: "transparent" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="rounded-lg flex gap-6"
          >
            <BottomNavigationAction
              className="footer_icons hover:text-gray-300 transition-transform transform hover:scale-125"
              style={{ color: "white" }}
              icon={<GithubIcon sx={{ fontSize: 45 }} />}
            />
            <BottomNavigationAction
              className="footer_icons hover:text-blue-400 transition-transform transform hover:scale-125"
              style={{ color: "white" }}
              icon={<LinkedInIcon sx={{ fontSize: 45 }} />}
            />
          </BottomNavigation>
        </div>
        <p className="absolute bottom-2 right-4 text-white text-md font-bold tracking-wide">
          Created by{" "}
          <span className="text-white  devlopBy ">Nikhil & Ajay</span>
        </p>
      </footer>
    </>
  );
}
