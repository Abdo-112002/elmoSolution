import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootRoutes } from "./Routes/BaseRoute";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const router = createBrowserRouter([RootRoutes]);

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
