import React from 'react'
import { Container, Grid, Typography, Stack, Link } from '@mui/material';
import { colors } from '../utilities/colors';


const Footer = () => {
  return (
    <Container component="footer" 
      sx={{ 
      bgcolor: colors.primary, 
      py: 2 
      }}>

      <Grid container xs={12} justifyContent="space-between" alignItems="center">
        
        <Grid item md={6}>
          <Typography variant="body2" color={colors.white} fontWeight="bold">
            &copy; TOUS DROITS RÉSERVÉS 2015 - 2023 UNIVERSITÉ ESPOIR
          </Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="body2" color={colors.white} fontWeight="bold">
            UN MINISTÈRE DE
            </Typography>
            <Link href="https://calvarypap.org/" underline="none" target="_blank" rel="noopener">
              <Typography variant="body2" color={colors.secondary} fontWeight="bold">
                CALVARY CHAPEL PORT-AU-PRINCE
              </Typography>
            </Link>
          </Stack>
        </Grid>

        <Grid item md={6}>
          <Stack direction="row" gap={1}>
            <Typography variant="body2" color={colors.white} fontWeight="bold">
              DEVELOPPÉ PAR
            </Typography>

            <Link href="https://zoomerdigital.tech/" underline="none" target="_blank" rel="noopener">
              <Typography variant="body2" color={colors.secondary} fontWeight="bold">
                ZOOMER DIGITAL
              </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer