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
import { colors } from "../utilities/colors";
import Button from "@mui/material/Button";



const AddProjectCard = ({ open, onClose }) => {
  const [type, setType] = useState("");
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [url, setUrl] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const addProject = async () => {
    const data = new FormData();
    data.set("projectName", name);
    data.set("discipline", discipline);
    data.set("type", type);
    data.set("projectUrl", url);
    data.set("authors", authors);
    data.set("yearOfSubmission", year);
    data.set("description", description);

    // const response = await fetch(
    //   "https://ue-project-explore-api.onrender.com/api/projects",
    //   {
    //     method: "POST",
    //     body: data,
    //     credentials: "include",
    //   }
    // );
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleDisciplineChange = (event) => {
    setDiscipline(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
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
            inputProps={{ id: "type-dropdown" }}
            sx={{ borderColor: colors.green, borderRadius: "8px" }}
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
            inputProps={{ id: "discipline-dropdown" }}
            sx={{ borderColor: colors.green, borderRadius: "8px" }}
          >
            <MenuItem value="" disabled>
              Select Discipline
            </MenuItem>

            <MenuItem value="sciences_informatiques">
              Sciences informatiques
            </MenuItem>
            <MenuItem value="sciences_comptables">Sciences comptables</MenuItem>
            <MenuItem value="gestion_des_affaires">
              Gestion des affaires
            </MenuItem>
            <MenuItem value="education">Education</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack direction="row" gap={3}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="projectName"
          placeholder="Nom du projet"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="url"
          placeholder="Url"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
        />
      </Stack>

      <Stack direction="row" gap={3}>
        {/*Type Dropdown Menu */}
        <FormControl sx={{ mt: 2, width: 185 }}>
          <InputLabel htmlFor="year-dropdown">Year</InputLabel>

          <Select
            value={year}
            onChange={handleYearChange}
            label="Year"
            inputProps={{ id: "year-dropdown" }}
            sx={{ borderColor: colors.green, borderRadius: "8px" }}
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

        <TextField
          margin="normal"
          required
          fullWidth
          id="authors"
          placeholder="Auteur du projet"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
        />
      </Stack>

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
          sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
        />
      </Stack>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        <Button
          variant="contained"
          sx={{
            mr: 2,
            borderRadius: "8px",
            backgroundColor: colors.green,
            color: "white:hover",
          }}
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
        >
          Annuler
        </Button>
      </div>
    </>
  );
};

export default AddProjectCard;
