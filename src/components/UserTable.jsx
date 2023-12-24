import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import AddUserCard from "./addUserCard";
import { fetchUser } from "../services/userService";

const columns = [
  { id: "name", label: "Nom", minWidth: 20 },
  { id: "code", label: "Role", minWidth: 10 },
  {
    id: "population",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "pop",
    label: "",
    minWidth: 170,
    align: "right",
  },
  {
    id: "po",
    label: "",
    minWidth: 170,
    align: "right",
  },
];

export default function UserTabble() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetchUser();
      const responseData = await response.json();
      setUsers(responseData.users);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  console.log(users);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow
                  key={user._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}>
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                  <TableCell align="right">{user.createdAt}</TableCell>

                  <TableCell align="right">
                    <Button
                      sx={{
                        background: "#32B8A0",
                        color: "#ffffff",
                        borderRadius: 10,
                        width: 150,
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#32B8A0",
                        },
                      }}
                      onClick={handleClickOpen}>
                      Modifier
                    </Button>

                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Ajouter Utilisateur</DialogTitle>
                      <DialogContent>
                        <AddUserCard />
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        background: "#FF5454",
                        color: "#ffffff",
                        borderRadius: 10,
                        minWidth: 150,
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#FF5454",
                        },
                      }}>
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
