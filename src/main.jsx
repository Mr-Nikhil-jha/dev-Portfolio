import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import { Home, Skillset, Projects, Resume } from "./components/index.js";
import Home from "./pages/HomePage.jsx";
import { HomePage, Projects, Resume, Skillset } from "./components/index.js";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index path="Home" element={<HomePage />} />
            <Route path="skill-set" element={<Skillset />} />
            <Route path="project" element={<Projects />} />
            <Route path="Resume" element={<Resume />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
);
