import React, { useEffect } from "react";
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
import useAlertStore from "../store/alertStore";

const UpdateUserCard = ({ open, onClose, user, onUpdate }) => {
  const [userID, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const { alert, setAlert } = useAlertStore();

 
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };



   useEffect(() => {
     if (user) {
       setRole(user.role || "");
       setUsername(user.username || "");
     }
   }, [user]); 


  const handleUpdateUser = async (userId) => {
    const user = { username, role };
    const response = await updateUser(user, userId);
    const responseData = await response.json();

    if (response.ok) {
      console.log(responseData)
      setAlert(responseData.message, 'success');
        if (onUpdate) {
          onUpdate();
        }
      onClose();
    } else {
      console.log(responseData);
      setAlert(responseData.message, 'error');
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
            onClick={handleUpdateUser}
          >
            Modifier
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
