import {Outlet} from "react-router-dom";
import "./App.css";
import Side from "./side";

function Layout(props) {
    return (
        <div>
        <div className="top">
        <button onClick="Menu()">&#9776;</button>
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