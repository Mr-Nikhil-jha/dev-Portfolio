import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {

    return (
        <>
            <header>
                <Header />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
