import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { colors } from "../utilities/colors";
import { useNavigate } from "react-router-dom";
import { ListItem } from "@mui/material";
import logo from "../assets/UE.png";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../services/authService";
import AlertMessage from "./AlertMessage";

const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const menus = [
    {
        primary: "Tableau de Bord",
        icon: <DashboardIcon />,
        path: "/tableau-de-bord",
    },
    {
        primary: "Gestion des Projets",
        icon: <FolderOpenIcon />,
        path: "/gestion-des-projets",
    },
    {
        primary: "Gestion des Comptes",
        icon: <ManageAccountsIcon />,
        path: "/gestion-des-comptes",
    },
];

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // handle navigation
    const handleClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        const response = await logout();

        if (response.ok) {
            navigate("/login");
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={open}
                sx={{ background: "white", boxShadow: "5px 1px #BE7B2E" }}>
                <Toolbar sx={{ color: colors.primary }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="div"
                        sx={{
                            flexGrow: 1,
                        }}></Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            color: colors.primary,
                        }}>
                        <AlertMessage />
                        <Typography>John Doe</Typography>
                        <span>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                sx={{ color: colors.primary }}
                                onClick={handleMenu}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                direction="row"
                                spacing={2}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                sx={{ mt: 4 }}>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </span>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={{ color: colors.primary }}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                    <List>
                        <ListItem>
                            <img height={50} src={logo} alt="fireSpot" />

                            <Typography
                                variant="p"
                                component="div"
                                color={colors.primary}
                                fontWeight={"bold"}>
                                Université Espoir
                            </Typography>
                        </ListItem>
                    </List>
                </DrawerHeader>
                <List sx={{ mt: 0 }}>
                    {menus.map((menu) => (
                        <Typography
                            key={menu.path}
                            disablePadding
                            onClick={() => {
                                handleClick(menu.path);
                            }}
                            textColor="inherit">
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                    color: colors.primary,
                                }}></ListItemIcon>
                            <ListItemButton
                                sx={{
                                    ml: 2,
                                    mr: 2,
                                    color: colors.primary,
                                    borderRadius: "5px",

                                    ":hover": {
                                        color: colors.primary,
                                        borderRadius: "5px",
                                    },
                                }}>
                                {menu.icon}
                                <ListItemText
                                    primary={
                                        <Typography fontWeight={"bold"}>{menu.primary}</Typography>
                                    }
                                    sx={{ color: colors.primary, ml: 1 }}
                                />
                            </ListItemButton>
                        </Typography>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
            </Box>
        </Box>
    );
}
