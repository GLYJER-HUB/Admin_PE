import React from 'react'
import { Box, CssBaseline, Typography } from '@mui/material';
import Sidenav from '../components/Sidenav'
import { colors } from '../utilities/colors';
import Search from '../components/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UserTable from '../components/UserTable'

const GestrionAccount = () => {
  return (<>

    <Box>
      <CssBaseline />
      <Box>
        <Typography variant='h4' sx={{ fontWeight: 'bold', color: colors.third}}>
          Gestion des Comptes
        </Typography>

        <Box display={'flex'} sx={{ }}>

          <Stack sx={{ pt: 2 }} direction="row" spacing={50}>
            <Search />
            <Button sx={{ color: colors.primary, borderColor: colors.primary }} variant="outlined">Ajouter Utilisateur</Button>
          </Stack>

        </Box>
        <UserTable/>
      </Box>

    </Box>
  </>
  )
}

export default GestrionAccount