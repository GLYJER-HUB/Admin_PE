import React from 'react';
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack
} from '@mui/material';
import { colors } from '../utilities/colors';

const AddProjectCard = ({ open, onClose }) => {
  const [type, setType] = React.useState('');
  const [discipline, setDiscipline] = React.useState('');
  const [year, setYear] = React.useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleDisciplineChange = (event) => {
    setDiscipline(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSave = () => {
    // Save logic here
    onClose();
  };

  const handleCancel = () => {
    // Cancel logic here
    onClose();
  };

  return (
    <>

      <Stack direction="row" gap={3}>
        {/*Type Dropdown Menu */}
        <FormControl sx={{ mt: 2, width: 185 }}>

          <InputLabel htmlFor="type-dropdown">Type</InputLabel>

          <Select
            value={type}
            onChange={handleTypeChange}
            label="Type"
            inputProps={{ id: 'type-dropdown' }}
            sx={{ borderColor: colors.green, borderRadius: '8px' }}
          >
            <MenuItem value="" disabled>
              Select Type
            </MenuItem>

            <MenuItem value="mobile_app">Mobile App</MenuItem>
            <MenuItem value="desktop_app">Dekstop App</MenuItem>
            <MenuItem value="web_app">Web App</MenuItem>
            <MenuItem value="redaction_projet">Rédaction projet</MenuItem>
            <MenuItem value="plan_daffaire">Plan d'affaire</MenuItem>
            <MenuItem value="systeme_comptable">Système Comptable</MenuItem>
            <MenuItem value="memoire">Mémoire</MenuItem>

          </Select>
        </FormControl>

        {/*Discipline Dropdown Menu */}
        <FormControl sx={{ mt: 2, width: 185 }}>

          <InputLabel htmlFor="type-dropdown">Discipline</InputLabel>

          <Select
            value={discipline}
            onChange={handleDisciplineChange}
            label="Discipline"
            inputProps={{ id: 'discipline-dropdown' }}
            sx={{ borderColor: colors.green, borderRadius: '8px' }}
          >
            <MenuItem value="" disabled>
              Select Discipline
            </MenuItem>

            <MenuItem value="sciences_informatiques">Sciences informatiques</MenuItem>
            <MenuItem value="sciences_comptables">Sciences comptables</MenuItem>
            <MenuItem value="gestion_des_affaires">Gestion des affaires</MenuItem>
            <MenuItem value="education">Education</MenuItem>

          </Select>
        </FormControl>
      </Stack>

      <Stack direction="row" gap={3}>

        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          placeholder="Nom"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 2, borderColor: colors.green, borderRadius: '8px' }}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="url"
          placeholder="Url"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 2, borderColor: colors.green, borderRadius: '8px' }}
        />
      </Stack>

      {/*Type Dropdown Menu */}
      <FormControl sx={{ mt: 2, width: 185 }}>

        <InputLabel htmlFor="year-dropdown">Year</InputLabel>

        <Select
          value={year}
          onChange={handleYearChange}
          label="Year"
          inputProps={{ id: 'year-dropdown' }}
          sx={{ borderColor: colors.green, borderRadius: '8px' }}
        >
          <MenuItem value="" disabled>
            Select Year
          </MenuItem>
          <MenuItem value="2027">2027</MenuItem>
          <MenuItem value="2026">2026</MenuItem>
          <MenuItem value="2025">2025</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
          <MenuItem value="2017">2017</MenuItem>
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2015">2015</MenuItem>

        </Select>
      </FormControl>

      <Stack direction="row" gap={3}>
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
          id="desc"
          placeholder="Description"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 2, borderColor: colors.green, borderRadius: '8px' }}
        />
      </Stack>

      {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button
                variant="contained"
                onClick={handleSave}
                sx={{ mr: 2, borderRadius: '8px', backgroundColor: colors.green, color: 'white:hover'}}
            >
                Enregister
            </Button>

            <Button
                variant="contained"
                onClick={handleCancel}
                sx={{ borderRadius: '8px', backgroundColor: colors.red, color: 'white' }}
            >
                Annuler
            </Button>
        </div> */}
    </>
  );
};

export default AddProjectCard;
