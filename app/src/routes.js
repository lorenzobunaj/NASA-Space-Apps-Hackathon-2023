import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Planets } from "./pages/Planets/index";
import { Planet } from "./pages/Planet/index";
import { PlanetImagePage } from "./pages/PlanetImage/index";

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
    },
    {
        path: "/planets/:id/image",
        element: <PlanetImagePage />
    }
];

const Router = () => {
    return useRoutes(routes);
};

export { Router };