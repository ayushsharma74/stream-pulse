import React from "react";
import ReactDOM from "react-dom/client"
import "./styles/globals.css"
import "./styles/icofont.css"
import Home from "./pages/home";
import Navbar from "./components/global/navigation/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <Home />
    </React.StrictMode>
)