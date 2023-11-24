import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Sidenav from '../components/Sidenav'
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import { colors } from '../utilities/colors';
import Search from '../components/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const GestionProjects = () => {
  return (<>
  <Sidenav/>
    <Box>
      <CssBaseline />
      <Box>
      <Typography variant='h4' sx={{fontWeight:'bold', color: colors.third, ml:10}}>
        Gestion des Projets
      </Typography>
     
      <Box display={'flex'} sx={{ml:10, justifyContent:'space-between'}}>
      <Search/>

      <Stack sx={{pt:2}}>
        <Button sx={{color: colors.primary, outlineColor: colors.primary, borderColor:colors.primary}} variant='outlined'>Ajouter Projets</Button>
      </Stack>
     
      </Box>
      </Box>
    
    </Box>
  </>)
}

export default GestionProjects