import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import DrawerNav from "../components/DrawerNav";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Box
        component="body"
        sx={{ display: "flex", mt: 15, minHeight: "100vh" }}
      >
        <DrawerNav />
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
