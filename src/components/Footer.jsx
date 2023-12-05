import React from 'react';
import { Container, Grid, Typography, Stack, Link, Box } from '@mui/material';
import { colors } from '../utilities/colors';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.primary,
        py: 2,
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color={colors.white} fontWeight="bold">
              &copy; TOUS DROITS RÉSERVÉS 2015 - 2023 UNIVERSITÉ ESPOIR
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 0.5 }}
              sx={{
                paddingLeft: { xs: '0', sm: '17%' },
              }}
            >
              <Typography variant="body2" color={colors.white} fontWeight="bold">
                UN MINISTÈRE DE
              </Typography>

              <Link href="https://calvarypap.org/" underline="none" target="_blank" rel="noopener">
                <Typography variant="body2" color={colors.accent} fontWeight="bold">
                  CALVARY CHAPEL PORT-AU-PRINCE
                </Typography>
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              gap={{ xs: 1, sm: 1 }}
              sx={{
                paddingLeft: { xs: '0', sm: '50%' },
              }}
            >
              <Typography variant="body2" color={colors.white} fontWeight="bold">
                DEVELOPPÉ PAR
              </Typography>

              <Link href="https://zoomerdigital.tech/" underline="none" target="_blank" rel="noopener">
                <Typography variant="body2" color={colors.accent} fontWeight="bold">
                  ZOOMER DIGITAL
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
