import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Supporters from "./pages/Supporters";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <Error/>
    },
    {
        path: "/contact",
        element: <Contact/>,
        errorElement: <Error/>
    },
    {
        path: "/supporters",
        element: <Supporters/>,
        errorElement: <Error/>
    },
    {
        path: "/events",
        element: <Event/>,
        errorElement: <Error/>,
    },
]);

