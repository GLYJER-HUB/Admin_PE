import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { colors } from '../utilities/colors';

function createData(Type, Name, Date) {
	return { Type, Name, Date};
}

const rows = [
	createData('Web App', 'Todo-App', '22-09-23'),
	
];

export default function ProjectTable() {
	return (
		<TableContainer component={Paper} sx={{mt:4}}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell  sx={{fontWeight:900}}>
							Type
						</TableCell>
						<TableCell align="right"  sx={{fontWeight:900}}>
							Nom Projet
						</TableCell>
						<TableCell align="right"  sx={{fontWeight:900}}>
							Date
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ '&:last-child td, &:last-child th':
								{ border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.Type}
							</TableCell>
							<TableCell align="right">
								{row.Name}
							</TableCell>
							<TableCell align="right">
								{row.Date}
							</TableCell>
							<TableCell align="right">
								<Button sx={{background:'#32B8A0', color:'#ffffff', borderRadius:10}}>Modifier</Button>
							</TableCell>
							<TableCell align="right">
								<Button sx={{background:'#FF5454', color:'#ffffff', borderRadius:10}}>Supprimer</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
