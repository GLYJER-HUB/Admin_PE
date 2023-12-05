import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import AddUserCard from './addUserCard';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';






function createData(Role, Identifiant, Date) {
	return { Role, Identifiant, Date };
}

const rows = [
	createData('Admin', '0022', '22-09-23'),

];



export default function ProjectTable() {

	const [loading, setLoading] = useState(true);

	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch("https://ue-project-explore-api.onrender.com/api/users",{
				credentials: 'include',
			});
			const responseData = await response.json();
			setUsers(responseData.users);
			setLoading(false);

		};

		fetchUsers();
	}, []);


	console.log(users);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	console.log(users);
	return (
		<TableContainer component={Paper} sx={{ mt: 4 }}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell sx={{ fontWeight: 900 }}>
							Role
						</TableCell>
						<TableCell align="right" sx={{ fontWeight: 900 }}>
							Identifiant
						</TableCell>
						<TableCell align="right" sx={{ fontWeight: 900 }}>
							Date
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow
							key={user.name}
							sx={{
								'&:last-child td, &:last-child th':
									{ border: 0 }
							}}
						>
							<TableCell component="th" scope="row">
								{user.role}
							</TableCell>
							<TableCell align="right">
								{user.Identifiant}
							</TableCell>
							<TableCell align="right">
								{user.Date}
							</TableCell>
							<TableCell align="right">
								<Button sx={{
									background: '#32B8A0',
									color: '#ffffff',
									borderRadius: 10,
									width: 150,
									'&:hover': {
										backgroundColor: '#fff',
										color: '#32B8A0',
									},

								}}
									onClick={handleClickOpen}

								>Modifier</Button>

								<Dialog open={open} onClose={handleClose}>
									<DialogTitle>
										Ajouter Utilisateur
									</DialogTitle>
									<DialogContent>
										<AddUserCard />
									</DialogContent>
									<DialogActions>
										<Button onClick={handleClose}>Enregistrer</Button>
										<Button onClick={handleClose}>Annuler</Button>
									</DialogActions>
								</Dialog>
							</TableCell>
							<TableCell align="right">
								<Button sx={{
									background: '#FF5454',
									color: '#ffffff',
									borderRadius: 10,
									minWidth: 150,
									'&:hover': {
										backgroundColor: '#fff',
										color: '#FF5454',
									},
								}}>Supprimer</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
