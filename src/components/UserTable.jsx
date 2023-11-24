import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(Role, Identifiant, Date) {
	return { Role, Identifiant, Date};
}

const rows = [
	createData('Admin', '0022', '22-09-23'),
	
];

export default function ProjectTable() {
	return (
		<TableContainer component={Paper} sx={{mt:4}}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell  sx={{fontWeight:900}}>
							Role
						</TableCell>
						<TableCell align="right"  sx={{fontWeight:900}}>
							Identifiant
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
								{row.Role}
							</TableCell>
							<TableCell align="right">
								{row.Identifiant}
							</TableCell>
							<TableCell align="right">
								{row.Date}
							</TableCell>
							<TableCell align="right">
								<Button>Modifier</Button>
							</TableCell>
							<TableCell align="right">
								<Button>Supprimer</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
