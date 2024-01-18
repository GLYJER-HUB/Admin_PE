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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { fetchUser, deleteUser, searchUser } from "../services/userService";
import AddUserCard from "./addUserCard";
import useAlertStore from "../store/alertStore";
import UpdateUserCard from "./UpdateUserCard";

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
    label: "Actions",
    minWidth: 10,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
    headerStyle: { fontWeight: "bold" },
  },
];

export default function UserTabble({ updateSignal, searchQuery }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { alert, setAlert } = useAlertStore();
  const [updateSignale, setUpdateSignale] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await (searchQuery
        ? searchUser(searchQuery)
        : fetchUser());
      const responseData = await response.json();
      setUsers(responseData.users);
       setUpdateSignale((prev) => !prev);
      setLoading(false);
    };

    fetchUsers();
  }, [updateSignal, searchQuery]);

  const handleDelete = async (id) => {
    try {
      const response = await deleteUser(id);
      const responseData = await response.json();

      if (response.status == 200) {
        setAlert(responseData.message, "success");

        const updatedUsers = users.filter((user) => user._id !== id);
        // Update the state with the new array
        setUsers(updatedUsers);
      } else {
        setAlert(responseData.message, "error");
      }
    } catch (error) {
      console.error("Error during deletion:");
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
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUpdateDialogOpen = (user) => {
    setSelectedUser(user);
    setIsUpdateDialogOpen(true);
  };

  const handleUpdateDialogClose = () => {
    setSelectedUser(null);
    setIsUpdateDialogOpen(false);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", mb: 10 }}>
       {loading && <p>Loading...</p>}
      {!loading && (
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ fontWeight: 900, backgroundColor: "#eae8e4" }}
                >
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
                  }}
                >
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                  <TableCell align="right">{user.createdAt}</TableCell>

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
                      onClick={() => handleUpdateDialogOpen(user)}
                    />
                    <UpdateUserCard
                      open={isUpdateDialogOpen}
                      onClose={handleUpdateDialogClose}
                      user={selectedUser}
                      onUpdate={fetchUser}
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
                      onClick={() => handleDelete(user._id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {isUpdateDialogOpen && (
        <UpdateUserCard
          open={isUpdateDialogOpen}
          onClose={handleUpdateDialogClose}
          user={selectedUser}
          onUpdate={fetchUser}
        />
      )}
    </Paper>
  );
}
