import React from "react";
import Box from "@mui/material/Box";
import UserCard from "../components/UserCard";
import ProjectCard from "../components/ProjectCard";
import { Typography, createTheme } from "@mui/material";
import { colors } from "../utilities/colors";

const theme = createTheme({
  spacing: 8,
});

const BoardTable = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{ color: colors.third, fontWeight: "bold" }}>
          Tableau de Bord
        </Typography>
        <Box sx={{ display: "flex", pt: 3 }}>
          <Box sx={{ m: 5, mt: 0, ml: 0 }}>
            <UserCard />
          </Box>
          <Box sx={{ m: 5, mt: 0 }}>
            <ProjectCard />
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default BoardTable;
