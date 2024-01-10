import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import { colors } from "../utilities/colors";
import Search from "../components/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ProjectTable from "../components/ProjectTable";
import AddProjectCard from "../components/AddProjectCard";
import { Add } from "@mui/icons-material";
import { addProject } from "../services/projectService";

const GestionProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box>
      <CssBaseline />
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.third }}
        >
          Gestion des Projets
        </Typography>

        <Box display={"flex"} sx={{}}>
          <Stack sx={{ pt: 2,  mb:5}} direction="row" spacing={75}>
            <Search />
            <Button
              sx={{
                color: colors.primary,
                borderColor: colors.primary,
                borderRadius: 10,
                width: 200,
              }}
              variant="outlined"
              onClick={handleClickOpen}
            >
              Ajouter Project
            </Button>
          </Stack>

          <AddProjectCard open={isDialogOpen} onClose={handleClose} />
        </Box>
        <ProjectTable />
      </Box>
    </Box>
  );
};

export default GestionProjects;
