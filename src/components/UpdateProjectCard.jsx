import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";
import { colors } from "../utilities/colors";
import Button from "@mui/material/Button";
import { updateProject } from "../services/projectService";

const UpdateProjectCard = ({ open, onClose, project, onUpdate }) => {
  const [projectId, setProjectId] = useState('');
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    discipline: "",
    type: "",
    projectUrl: "",
    authors: [],
    yearOfSubmission: "",
  });


  useEffect(() => {
    if (project) {
      setFormData({
        projectName: project.project_name,
        description: project.description,
        discipline: project.discipline,
        type: project.type,
        projectUrl: project.project_url,
        authors: project.authors,
        yearOfSubmission: project.year_of_submission,
      })
      setProjectId(project._id)
    }

    // Reset formData when the component is unmounted
    return () => {
      setFormData({
        projectName: "",
        description: "",
        discipline: "",
        type: "",
        projectUrl: "",
        authors: [],
        yearOfSubmission: "",
      });
      setProjectId("");
    }
  }, [project])


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      if (name === "authors") {
        const authorsArray = value.split(",").map((author) => author.trim());
        return {
          ...prevFormData,
          [name]: authorsArray,
        };
      }

      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };


  const handleUpdateProject = async (e) => {
    e.preventDefault();

    // Create new form data for the request and do mapping
    const formDataForRequest = new FormData();
    for (const key in formData) {
      if (key === "authors" && Array.isArray(formData[key])) {
        formData[key].forEach((author, index) => {
          formDataForRequest.append(`authors[${index}]`, author);
        });
      } else {
        formDataForRequest.append(key, formData[key]);
      }
    }

    const response = await updateProject(formDataForRequest, projectId);
    const responseData = await response.json();

    if (response.status === 200) {
      alert(responseData.message);

      if (onUpdate) { onUpdate }

      onClose(); // Close the dialog when the update is successful
    } else {
      alert(responseData.message);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Modifier Projet</DialogTitle>
        <DialogContent>
          <Stack direction="row" gap={3}>
            {/*Type Dropdown Menu */}
            <FormControl sx={{ mt: 2, width: 185 }}>
              <InputLabel htmlFor="type-dropdown">Type</InputLabel>

              <Select
                value={formData.type}
                onChange={handleInputChange}
                label="Type"
                inputProps={{ id: "type-dropdown" }}
                name="type"
                sx={{ borderColor: colors.green, borderRadius: "8px" }}
              >
                <MenuItem value="" disabled>
                  Select Type
                </MenuItem>

                <MenuItem value="App mobile">Mobile App</MenuItem>
                <MenuItem value="Desktop application">Dekstop App</MenuItem>
                <MenuItem value="Web application">Web App</MenuItem>
                <MenuItem value="Rédaction de projet">
                  Rédaction projet
                </MenuItem>
                <MenuItem value="Plan d'affaire">Plan d'affaire</MenuItem>
                <MenuItem value="Système comptable">Système Comptable</MenuItem>
                <MenuItem value="Mémoire">Mémoire</MenuItem>
              </Select>
            </FormControl>

            {/*Discipline Dropdown Menu */}
            <FormControl sx={{ mt: 2, width: 185 }}>
              <InputLabel htmlFor="type-dropdown">Discipline</InputLabel>

              <Select
                value={formData.discipline}
                onChange={handleInputChange}
                label="Discipline"
                inputProps={{ id: "discipline-dropdown" }}
                name="discipline"
                sx={{ borderColor: colors.green, borderRadius: "8px" }}
              >
                <MenuItem value="" disabled>
                  Select Discipline
                </MenuItem>

                <MenuItem value="Informatique">Sciences informatiques</MenuItem>
                <MenuItem value="Comptabilité">Sciences comptables</MenuItem>
                <MenuItem value="Gestion">Gestion des affaires</MenuItem>
                <MenuItem value="Éducation">Education</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack direction="row" gap={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="projectName"
              placeholder="Nom du projet"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
              value={formData.projectName}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="projectUrl"
              placeholder="Url"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
              value={formData.projectUrl}
              onChange={handleInputChange}
            />
          </Stack>

          <Stack direction="row" gap={3}>
            {/*Type Dropdown Menu */}
            <FormControl sx={{ mt: 2, width: 185 }}>
              <InputLabel htmlFor="year-dropdown">Year</InputLabel>

              <Select
                label="Year"
                inputProps={{ id: "year-dropdown" }}
                name="yearOfSubmission"
                sx={{ borderColor: colors.green, borderRadius: "8px" }}
                value={formData.yearOfSubmission}
                onChange={handleInputChange}
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
              name="authors"
              placeholder="Auteur du projet"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
              value={formData.authors}
              onChange={handleInputChange}
            />
          </Stack>

          <Stack direction="row" gap={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
              name="description"
              placeholder="Description"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
              value={formData.description}
              onChange={handleInputChange}
            />
          </Stack>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          ></div>
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
            onClick={handleUpdateProject}
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

export default UpdateProjectCard;
