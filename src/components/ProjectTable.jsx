import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import AddProjectCard from './AddProjectCard';


function createData(Type, Name, Date) {
	return { Type, Name, Date };
}

const rows = [
	createData('Web App', 'Todo-App', '22-09-23'),

];

export default function ProjectTable() {

		
const [loading, setLoading] = useState(true);

const [projects, setProjects] = useState([]);
 useEffect(() => {
   const fetchProjects = async () => {
	 const response = await fetch("http://localhost:4000/api/projects");
	 const responseData = await response.json();
	 setProjects(responseData.projects);
	 setLoading(false);
	
   };

   fetchProjects();
 }, []);


	const [open, setOpen] = useState(false);


	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<TableContainer component={Paper} sx={{ mt: 4 }}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell sx={{ fontWeight: 900 }}>
							Type
						</TableCell>
						<TableCell align="right" sx={{ fontWeight: 900 }}>
							Nom Projet
						</TableCell>
						<TableCell align="right" sx={{ fontWeight: 900 }}>
							Date
						</TableCell>
						<TableCell align="center" sx={{ fontWeight: 900 }}>
						</TableCell>
						<TableCell align="right" sx={{ fontWeight: 900 }}>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{projects.map((project, index) => (
						<TableRow
							key={project._}
							sx={{
								'&:last-child td, &:last-child th':
									{ border: 0 }
							}}
						>
							<TableCell component="th" scope="row">
								{project.type}
							</TableCell>
							<TableCell align="right">
								{project.project_name}
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
								>
									Modifier
								</Button>

								<Dialog open={open} onClose={handleClose}>
									<DialogTitle>
										Ajouter Projet
									</DialogTitle>
									<DialogContent>
										<AddProjectCard />
									</DialogContent>
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
								}}
								>
									Supprimer
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
