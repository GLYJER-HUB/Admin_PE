import { useState } from "react";
import {
  Box,
  CssBaseline,
  Typography,
} from "@mui/material";
import { colors } from "../utilities/colors";
import SearchBar from "../components/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserTable from "../components/UserTable";
import AddUserCard from "../components/addUserCard";
import ChangePasswordModal from "../components/ChangePasswordModal";

const GestrionAccount = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddUserSuccess = () => {
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
          Gestion des Comptes
        </Typography>

        <Box display={"flex"} sx={{}}>
          <Stack sx={{ pt: 2, mb: 5 }} direction="row" spacing={60}>
            <SearchBar onSearch={handleSearch} />
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
            <AddUserCard
              open={isDialogOpen}
              onClose={handleClose}
              onAddUserSuccess={handleAddUserSuccess}
            />
          </Stack>
        </Box>
        <Box sx={{ mt: 5 }}>
          <UserTable updateSignal={updateTable} searchQuery={searchQuery} />
          <ChangePasswordModal />
        </Box>
      </Box>
    </Box>
  );
};

export default GestrionAccount;
