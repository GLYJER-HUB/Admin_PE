import React from 'react'
import { Box, CssBaseline, Typography } from '@mui/material';
import Sidenav from '../components/Sidenav'
import { colors } from '../utilities/colors';

const GestrionAccount = () => {
  return (
  <Box>
    <Sidenav/>
    <CssBaseline/>
    <Typography variant='h5' sx={{color:colors.third, fontWeight:'bold'}}>
      Gestion des Comptes
    </Typography>
  </Box>
  )
}

export default GestrionAccount