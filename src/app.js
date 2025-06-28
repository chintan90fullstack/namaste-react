import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Grocery from "./components/Grocery";
// import Contact from "./components/Contact";
// import RestaurantMenu from "./components/RestaurantMenu";
// import Error from "./components/Error";
// import { BrowserRouter, Routes, Route } from "react-router";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading

const About = lazy( () => import("./components/About") );
const Grocery = lazy( () => import("./components/Grocery") );
const Contact = lazy( () => import("./components/Contact") );
const RestaurantMenu = lazy( () => import("./components/RestaurantMenu") );
const Error = lazy( () => import("./components/Error") );


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
            <Header>
            </Header>
            
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
                element: <Suspense fallback={<h1>About ka placeholder</h1>} > <About /> </Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Grocery ka placeholder</h1>} > <Grocery /> </Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1>Contact ka placeholder</h1>} > <Contact /> </Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <Suspense fallback={<h1>Restaurant Menu ka placeholder</h1>} > <RestaurantMenu/> </Suspense>,
            },
        ],
        errorElement: <Suspense fallback={<h1>Error ka placeholder</h1>} > <Error/> </Suspense>,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// if we are rendering only single component
// root.render(<AppLayout/>);

//if we have router configurations this will work.
root.render(<RouterProvider router={appRouter} />);