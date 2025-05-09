import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Grocery from "./components/Grocery";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
// import { BrowserRouter, Routes, Route } from "react-router";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading

const Grocery = lazy( () => import("./components/Grocery") );


const Footer = () => {
    return (
        <div className="footer">
            Here comes footer area
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Grocery ka placeholder</h1>} > <Grocery /> </Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
        ],
        errorElement: <Error/>,
    },
    // {
    //     path: "/about",
    //     element: <About />
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />
    // }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// if we are rendering only single component
// root.render(<AppLayout/>);

//if we have router configurations this will work.
root.render(<RouterProvider router={appRouter} />);