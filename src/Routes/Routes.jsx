import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                path: '/home',
                element: <Home />
            },
            {
                path: '/apps',
                element: <Apps />
            },
            {
                path: '/installation',
                element: <Installation />
            }
        ]
    },
])

export default router;