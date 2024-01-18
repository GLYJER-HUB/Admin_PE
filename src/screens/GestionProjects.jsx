import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import { colors } from "../utilities/colors";
import Search from "../components/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ProjectTable from "../components/ProjectTable";
import AddProjectCard from "../components/AddProjectCard";
import ChangePasswordModal from "../components/ChangePasswordModal";

const GestionProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProjectSuccess = () => {
    setIsDialogOpen(false);
    setUpdateTable((prev) => !prev);
  };

  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setUpdateTable((prev) => !prev);
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
          <Stack sx={{ pt: 2, mb: 5 }} direction="row" spacing={60}>
            <Search onSearch={handleSearch} />
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

          <AddProjectCard
            open={isDialogOpen}
            onClose={handleClose}
            onAddProjectSuccess={handleAddProjectSuccess}
          />
        </Box>
        <Box sx={{ mt: 5 }}>
          <ProjectTable updateSignal={updateTable} searchQuery={searchQuery} />
          <ChangePasswordModal />
        </Box>
      </Box>
    </Box>
  );
};

export default GestionProjects;
