import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { fetchProject, deleteProject } from "../services/projectService";
import UpdateProjectCard from "./UpdateProjectCard";
import useAlertStore from "../store/alertStore";

const columns = [
  { id: "name", label: "Nom Projet", minWidth: 20 },
  { id: "code", label: "Discipline", minWidth: 10 },
  {
    id: "population",
    label: "Date",
    minWidth: 170,
    align: "center",
    fontWeight: "bold",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "pop",
    label: "Actions",
    minWidth: 10,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
    headerStyle: { fontWeight: "bold" },
  },
];

export default function ProjectTable() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const { setAlert } = useAlertStore();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetchProject();
      const responseData = await response.json();
      setProjects(responseData.projects);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await deleteProject(id);
      const responseData = await response.json();

      if (response.status == 200) {
        // Trigger alert
        setAlert(responseData.message, 'success');

        const updatedProjects = projects.filter(
          (project) => project._id !== id
        );

        // Update the state with the new array
        setProjects(updatedProjects);
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const handleUpdateDialogOpen = (project) => {
    setSelectedProject(project);
    setIsUpdateDialogOpen(true);
  };

  const handleUpdateDialogClose = () => {
    setSelectedProject(null);
    setIsUpdateDialogOpen(false);
  };



  return (
    <Paper sx={{ width: "100%", overflow: "hidden", mb: 10 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {projects
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((project, index) => (
                <TableRow
                  key={project._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {project.project_name}
                  </TableCell>
                  <TableCell align="right">{project.discipline}</TableCell>
                  <TableCell align="right">{project.createdAt}</TableCell>

                  <TableCell align="right">
                    <EditIcon
                      sx={{
                        color: "#32B8A0",
                        borderRadius: 10,
                        width: 150,
                        "&:hover": {
                          color: "#32B8A9",
                        },
                      }}
                      onClick={() => handleUpdateDialogOpen(project)}
                    />
                    <UpdateProjectCard
                      open={isUpdateDialogOpen}
                      onClose={handleUpdateDialogClose}
                      project={selectedProject}
                      onUpdate={fetchProject}
                    />

                    <DeleteIcon
                      sx={{
                        color: "#ff5454",
                        borderRadius: 10,
                        minWidth: 150,
                        "&:hover": {
                          color: "#FF5460",
                        },
                      }}
                      onClick={() => handleDelete(project._id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={projects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
