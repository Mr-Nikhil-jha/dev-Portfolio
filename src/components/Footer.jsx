import * as React from "react";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import { Mail } from "@mui/icons-material";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#0A0E27] text-white p-4  bottom-0 w-full h-28">
                <div className=" text-center md:text-lg font-mono">All Rights Reserved by Dev-portfolio © 2025</div>
                <div>
                    <ul className="flex justify-center gap-8 mt-4 ">
                        <li className="hover:text-gray-400 transition duration-200">
                            <a href="https://github.com/mr-nikhil-jha" target="_blank">
                                <GithubIcon sx={{ fontSize: 30 }} className="cursor-pointer" />
                            </a>
                        </li>
                        <li className="hover:text-gray-400 transition duration-200">
                            <a href="https://linkedin.com" target="_blank">
                                <LinkedInIcon sx={{ fontSize: 30 }} className="cursor-pointer" />
                            </a>
                        </li>
                        <li className="hover:text-gray-400 transition duration-200">
                            <a href="mailto:mail@domain.com" onClick={() => (window.location.href = "np.html")}>
                                <EmailIcon sx={{ fontSize: 30 }} className="cursor-pointer" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
