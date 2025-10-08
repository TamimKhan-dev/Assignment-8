import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/apps',
                element: <Apps />
            },
            {
                path: '/installation',
                element: <Installation />
            },
            {
                path: '/apps/:id',
                element: <AppDetails />
            }
        ]
    },
])

export default router;