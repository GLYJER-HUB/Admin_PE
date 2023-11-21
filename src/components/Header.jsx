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



function Header() {
    return (
        <>
            <AppBar style={{ background: "#ffffff", boxShadow: '5px 1px #BE7B2E', }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: colors.primary }}>
                        
                    </Typography>
                    <div>
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ color: colors.primary }}>
                                John Doe
                            </Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit">
                                <AccountCircle sx={{ color: colors.primary }} />
                            </IconButton>
                        </Box>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header