import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Sidenav from '../components/Sidenav'
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { colors } from '../utilities/colors';
import Search from '../components/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ProjectTable from '../components/ProjectTable';
import AddProjectCard from '../components/AddProjectCard'



const GestionProjects = () => {

   
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box>

      <CssBaseline />
      <Box>
        <Typography variant='h4' sx={{ fontWeight: 'bold', color: colors.third }}>
          Gestion des Projets
        </Typography>

        <Box display={'flex'} sx={{}}>


          <Stack sx={{ pt: 2 }} direction="row" spacing={50}>
            <Search />
            <Button sx={{
              color: colors.primary,
              borderColor: colors.primary,
              borderRadius: 10,
              width: 200
            }}
              variant="outlined"
              onClick={handleClickOpen}
            >
              Ajouter Project
            </Button>
          </Stack>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              Ajouter Projet
            </DialogTitle>
            <DialogContent>
              <AddProjectCard />
            </DialogContent>
          
          </Dialog>

        </Box>
        <ProjectTable />
      </Box>

    </Box>
  )
}

export default GestionProjects