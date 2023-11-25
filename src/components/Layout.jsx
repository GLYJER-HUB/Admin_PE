import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from './Footer'
import DrawerNav from '../components/DrawerNav';

const Layout = () => {
    return (
        <>
           
            <body>
                <DrawerNav />
                <Outlet />
            </body>
            <Footer />
        </>
    )
}

export default Layout