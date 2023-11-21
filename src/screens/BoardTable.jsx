import React from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import { useNavigate } from "react-router-dom";
import UserCard from '../components/UserCard';
import ProjectCard from '../components/ProjectCard';
import { Typography, createTheme } from '@mui/material';
import { colors } from '../utilities/colors';

const theme = createTheme({
  spacing: 8,
});

const BoardTable = () => {

  return <>
    <Sidenav />
    <Box sx={{ display: "inline-block" }}>
      <Typography variant='h4' sx={{color:colors.third}}>
        Tableau de Bord
      </Typography>
      <Box
        sx={{ display: "flex", p: 5 }}>
        <Box sx={{m: 5}}>
          <UserCard />
        </Box>
        <Box sx={{m : 5}}>
          <ProjectCard />
        </Box>

      </Box>
    </Box>






  </>
}

export default BoardTable