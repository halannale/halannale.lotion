import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
        <header>Lotion</header>
        <p>Like Notion, but worse.</p>
        <div id="content">
            <Outlet />
        </div>
        </>
    )
}

export default Layout;