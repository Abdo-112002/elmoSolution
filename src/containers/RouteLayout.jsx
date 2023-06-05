import { Outlet } from "react-router-dom";
import { NavBar, UpToPage } from "../components";

const RouteLayout = () => {
    return (
        <>
            <NavBar />
            <UpToPage />
            <Outlet />
        </>
    );
};

export default RouteLayout;
