import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import AddProjectCard from './AddProjectCard';




const columns = [
	{ id: 'name', label: 'Nom Projet', minWidth: 20 },
	{ id: 'code', label: 'Discipline', minWidth: 10 },
	{
		id: 'population',
		label: 'Date',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'pop',
		label: '',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'po',
		label: '',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
];




export default function ProjectTable() {

	const [loading, setLoading] = useState(true);

	const [projects, setProjects] = useState([]);
	useEffect(() => {
		const fetchProjects = async () => {
			const response = await fetch("https://ue-project-explore-api.onrender.com/api/projects", {

			});
			const responseData = await response.json();
			setProjects(responseData.projects);
			setLoading(false);

		};

		fetchProjects();
	}, []);


	console.log(projects);



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
	}

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden', mb:10 }}>
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
							.map((project) => (
								<TableRow
									key={project._id}
									sx={{
										'&:last-child td, &:last-child th':
											{ border: 0 }
									}}
								>
									<TableCell component="th" scope="row">
										{project.project_name}
									</TableCell>
									<TableCell align="right">
										{project.discipline}
									</TableCell>
									<TableCell align="right">
										{project.createdAt}
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
												<AddProjectCard/>
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
							)
							)}
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