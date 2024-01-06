import React from "react";
import { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Button from "@mui/material/Button";
import { colors } from "../utilities/colors";
import { updateUser } from "../services/userService";

const UpdateUserCard = ({ open, onClose, id }) => {
  console.log(id);
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUpdateUser = async () => {
    const user = { username, role };
    const response = await updateUser(user, id);
    console.log(response);
    const responseData = await response.json();
    if (response.ok) {
      alert(responseData.message);
      onClose();
    } else {
      alert(responseData.message);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Ajouter Utilisateur</DialogTitle>
        <DialogContent>
          {/*Dropdown Menu */}
          <FormControl sx={{ mt: 2, width: 185 }}>
            <InputLabel htmlFor="role-dropdown">Role</InputLabel>
            <Select
              value={role}
              onChange={handleRoleChange}
              label="Role"
              inputProps={{ id: "role-dropdown" }}
              sx={{ borderColor: colors.green, borderRadius: "8px" }}
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>

              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="member">Member</MenuItem>
            </Select>
          </FormControl>

          <Stack direction="row" gap={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="identifiant"
              label="Identifiant"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="motDePasse"
              label="Mot de passe"
              type="password"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              borderRadius: "8px",
              backgroundColor: colors.green,
              color: "white:hover",
            }}
            onClick={handleAddUser}
          >
            Enregister
          </Button>

          <Button
            variant="contained"
            sx={{
              borderRadius: "8px",
              backgroundColor: colors.red,
              color: "white",
            }}
            onClick={onClose}
          >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateUserCard;
