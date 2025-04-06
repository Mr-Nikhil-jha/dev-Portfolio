import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { Home, Skillset, Projects, Resume } from "./components/index.js";
// import Home from "./pages/HomePage.jsx";
import { HomePage, Resume, Skillset } from "./components/index.js";
import Projects from "./pages/Projects.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="skill-set" element={<Skillset />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />{" "}
      {/* Ensure lowercase "resume" */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
