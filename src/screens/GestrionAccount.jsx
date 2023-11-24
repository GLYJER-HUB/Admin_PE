import React from 'react'
import { Box, CssBaseline, Typography } from '@mui/material';
import Sidenav from '../components/Sidenav'
import { colors } from '../utilities/colors';
import Search from '../components/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const GestrionAccount = () => {
  return (<>
    <Sidenav/>
    <Box>
      <CssBaseline />
      <Box>
      <Typography variant='h4' sx={{fontWeight:'bold', color: colors.third, ml:10}}>
        Gestion des Comptes
      </Typography>
     
      <Box display={'flex'} sx={{ml:10}}>
      <Search/>

      <Stack sx={{pt:2}}>
        <Button sx={{color: colors.primary, outlineColor: colors.primary, borderColor:colors.primary}} variant='outlined'>Ajouter Utilisateur</Button>
      </Stack>
     
      </Box>
      </Box>
    
    </Box>
    </>
  )
}

export default GestrionAccount