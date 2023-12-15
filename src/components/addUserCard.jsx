import React from 'react';
import { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack
} from '@mui/material';
import Button from "@mui/material/Button";
import { colors } from '../utilities/colors';


const AddUserCard = ({ open, onClose }) => {
  const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };


  return (
    <>

      {/*Dropdown Menu */}
      <FormControl sx={{ mt: 2, width: 185 }}>
        <InputLabel htmlFor="role-dropdown">Role</InputLabel>
        <Select
          value={role}
          onChange={handleRoleChange}
          label="Role"
          inputProps={{ id: 'role-dropdown' }}
          sx={{ borderColor: colors.green, borderRadius: '8px' }}
        >
          <MenuItem value="" disabled>
            Select Role
          </MenuItem>

          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
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
          sx={{ mt: 2, borderColor: colors.green, borderRadius: '8px' }}
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
          sx={{ mt: 2, borderColor: colors.green, borderRadius: '8px' }}
        />
      </Stack>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Button
          variant="contained"
      
          sx={{ mr: 2, borderRadius: '8px', backgroundColor: colors.green, color: 'white:hover' }}
        >
          Enregister
        </Button>

        <Button
          variant="contained"
          sx={{ borderRadius: '8px', backgroundColor: colors.red, color: 'white' }}
        >
          Annuler
        </Button>
      </div>
    </>
  );
};

export default AddUserCard;
