import React, { useState } from 'react'
import { Box, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { colors } from '../utilities/colors';
import Search from '../components/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UserTable from '../components/UserTable'
import AddUserCard from '../components/addUserCard';

const GestrionAccount = () => {
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
          Gestion des Comptes
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
              Ajouter Utilisateur
            </Button>
          </Stack>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              Ajouter Utilisateur
            </DialogTitle>
            <DialogContent>
              <AddUserCard />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Enregistrer</Button>
              <Button onClick={handleClose}>Annuler</Button>
            </DialogActions>
          </Dialog>

        </Box>
        <UserTable />
      </Box>

    </Box>

  )
}

export default GestrionAccount