import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <body>
                <Outlet />
            </body>
            <Footer />
        </>
    )
}

export default Layout