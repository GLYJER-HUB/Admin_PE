import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { colors } from '../utilities/colors';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import AddUserCard from './addUserCard';


function Header() {

    const [auth, setAuth] = useState(true);

    const [anchorEl, setAnchorEl] = useState(null);

    const [showAddUserCard, setShowAddUserCard] = useState(false);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setShowAddUserCard(true);
        setAnchorEl(null);
    };

    const handleAddUserCardClose = () => {
        setShowAddUserCard(false);
    };

    return (
        <>
            <Box>
                <AppBar
                    style={{
                        background: "#ffffff",
                        boxShadow: '5px 1px #BE7B2E',
                    }}>
                    <Toolbar >
                        <Typography
                            component="div"
                            sx={{
                                flexGrow: 1,
                            }}>
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                color: colors.primary
                            }}>
                            <Typography>
                                John Doe
                            </Typography>
                            <span>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    sx={{ color: colors.primary }}
                                    onClick={handleMenu}
                                    color='inherit'
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>

                                </Menu>
                            </span>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            {showAddUserCard && <AddUserCard open={showAddUserCard} onClose={handleAddUserCardClose} />}
        </>
    );
}

export default Header