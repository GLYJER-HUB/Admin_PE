import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import DrawerNav from "../components/DrawerNav";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Box component="body">
        <DrawerNav />
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
