import React from 'react'
import { Container, Grid, Typography } from '@mui/material';
import { colors } from '../utilities/colors';


const Footer = () => {
  return (
    <Container component="footer" 
      sx={{ 
      bgcolor: colors.green, 
      py: 2 
      }}>

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="body2" color={colors.white} fontWeight="bold">
            &copy; TOUS DROITS RÉSERVÉS 2015 - 2023 UNIVERSITÉ ESPOIR
          </Typography>
          <Typography variant="body2" color={colors.white} fontWeight="bold">
          UN MINISTÈRE DE CALVARY CHAPEL PORT-AU-PRINCE
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color={colors.white} fontWeight="bold">
            DEVELOPPÉ PAR  ZOOMER DIGITAL
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer