import {Outlet} from "react-router-dom";
import "./App.css";
import Side from "./side";

function Layout(props) {
    const menu = () => {
        const sideDisplay = document.getElementsByClassName("app-side")[0];
        if (sideDisplay.style.display === "none") {
          sideDisplay.style.display = "block";
        }
        else {
          sideDisplay.style.display = "none";
        }
    }

    return (
        <div>
        <div className="top">
        <button onClick={menu}>&#9776;</button>
        <div className="top-header">
            <h1>Lotion</h1>
            <p>Like Notion, but worse.</p>
        </div>
        </div>
        {props.children}
        </div>
    );
}

export default Layout;