import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { colors } from '../utilities/colors';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg'




const drawerWidth = 260;

const menus = [
  {
    primary: "Tableau de Bord",
    path: "/",
  },
  {
    primary: "Gestion des Projets",
    path: "/gestion-des-projets",
  },
  {
    primary: "Gestion des Comptes",
    path: "/gestion-des-comptes",
  }
];


const Sidenav = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // handle navigation
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >

        <Box sx={{ pt: 5 }}>
          <img src="{logo}" alt="" />
          <Typography sx={{ color: colors.primary }}>
            Universite Espoir
          </Typography>
        </Box>
        {menus.map((menu) => (
          <Typography
            key={menu.path}
            disablePadding
            onClick={() => {
              handleClick(menu.path);
            }}
            textColor='inherit'
          >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemButton
              sx={{
                ml: 2,
                mr: 2,
                color:
                  location.pathname === menu.path
                    ? colors.primary
                    : colors.secondary,

                borderRadius: "5px",
                ":hover": {
                  color: colors.secondary,

                  borderRadius: "5px",
                },
              }}
            >
              <ListItemText primary={menu.primary} sx={{color:colors.primary, fontWeight: 'bold' }} />
            </ListItemButton>

          </Typography>


        ))}
      </Drawer>


    </Box>
  );
}

export default Sidenav