import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { colors } from '../utilities/colors';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >  
  •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{}}>
      <Typography variant='h4' sx={{color:colors.primary}}>
        Projets
      </Typography>
      <Typography sx={{color:colors.primary}}>
        8
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ProjectCard() {
  return (
    <Box sx={{ minWidth: 275}}>
      <Card variant='elevation'>{card}</Card>
    </Box>
  );
}