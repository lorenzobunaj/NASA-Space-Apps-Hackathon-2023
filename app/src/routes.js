import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Planets } from "./pages/Planets/index";
import { Planet } from "./pages/Planet/index";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/planets",
        element: <Planets />
    },
    {
        path: "/planets/:id",
        element: <Planet />
    }
];

const Router = () => {
    return useRoutes(routes);
};

export { Router };