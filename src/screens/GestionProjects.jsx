import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Sidenav from '../components/Sidenav'
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { colors } from '../utilities/colors';
import Search from '../components/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ProjectTable from '../components/ProjectTable';



const GestionProjects = () => {
  return (<>
 
    <Box>

      <CssBaseline />
      <Box>
        <Typography variant='h4' sx={{ fontWeight: 'bold', color: colors.third }}>
          Gestion des Projets
        </Typography>

        <Box display={'flex'} sx={{ }}>


          <Stack sx={{ pt: 2 }} direction="row" spacing={50}>
            <Search />
            <Button sx={{color:colors.primary, borderColor:colors.primary, borderRadius:10}} variant="outlined">Ajouter Project</Button>
          </Stack>

        </Box>
        <ProjectTable />
      </Box>

    </Box>
  </>)
}

export default GestionProjects