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
import Home from "./pages/HomePage.jsx";
import { HomePage, Projects, Resume, Skillset } from "./components/index.js";

let router = createBrowserRouter(
<<<<<<< HEAD
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="skill-set" element={<Skillset />} />
            <Route path="project" element={<Projects />} />
            <Route path="Resume" element={<Resume />} />
        </Route>
    )
=======
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="skill-set" element={<Skillset />} />
      <Route path="project" element={<Projects />} />
      <Route path="Resume" element={<Resume />} />
    </Route>
  )
>>>>>>> 9e07b93e323738270d116c204a59977050eaf990
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
