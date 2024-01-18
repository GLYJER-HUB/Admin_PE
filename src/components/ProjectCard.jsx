import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { colors } from '../utilities/colors';

export default function ProjectCard({ projectCount }) {
  const card = (
    <React.Fragment>
      <CardContent sx={{}}>
        <Typography variant='h4' sx={{ color: colors.primary }}>
          Projets
        </Typography>
        <Typography sx={{ color: colors.primary }}>
          {projectCount}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='elevation'>{card}</Card>
    </Box>
  );
}