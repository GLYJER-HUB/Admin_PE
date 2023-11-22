import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Sidenav from '../components/Sidenav'
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import { colors } from '../utilities/colors';


const GestionProjects = () => {
  return (
    <Box>
      <Sidenav/>
      <CssBaseline />
      <Typography variant='h5' sx={{fontWeight:'bold', color: colors.third}}>
        Gestion des Projets
      </Typography>

    </Box>


  )
}

export default GestionProjects