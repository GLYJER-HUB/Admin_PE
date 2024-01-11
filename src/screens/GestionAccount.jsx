import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { colors } from "../utilities/colors";
import Search from "../components/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserTable from "../components/UserTable";
import AddUserCard from "../components/addUserCard";

const GestrionAccount = () => {
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
          Gestion des Comptes
        </Typography>

        <Box display={"flex"} sx={{}}>
          <Stack sx={{ pt: 2, mb: 5 }} direction="row" spacing={60}>
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
              Ajouter Utilisateur
            </Button>
            <AddUserCard open={isDialogOpen} onClose={handleClose} />
          </Stack>
        </Box>
        <Box sx={{ mt: 5 }}>
          <UserTable />
        </Box>
      </Box>
      
    </Box>
  );
};

export default GestrionAccount;
