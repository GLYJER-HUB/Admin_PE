import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '../utilities/colors';
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';



const defaultTheme = createTheme();

export default function LoginCard() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });

    var username = data.get('username');
    var password = data.get('password');

    const user = {username, password}

    const response = await fetch("https://ue-project-explore-api.onrender.com/api/auth/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
      credentials: 'include',
    });



    if (response.ok) {
      // Handle successful login
      console.log('Login successful!');
      navigate('/board-table');
    };

  }

  return (
    <Container sx={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
    }}>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, alignContent:'center'}}>
            <Stack direction="column" sx={{alignItems:'center'}}>

          
            <TextField
              margin="normal"
              fullWidth
              required
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              sx={{borderColor:colors.primary, color:colors.primary}}
            />

            <TextField
              margin="normal"
              fullWidth
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: colors.primary, borderRadius:3 }}
            >
              Connect
            </Button>

            </Stack>

          </Box>
        </Box>
      </Container>
      </Container>
  );
}