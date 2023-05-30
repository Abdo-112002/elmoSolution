import { ContactUs, Home } from "../pages";

import { RouteLayout } from "../containers";

export const RootRoutes = {
    path: "/",
    element: <RouteLayout />,
    // errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "contact",
            element: <ContactUs />,
        },
    ],
};
