import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import { colors } from '../utilities/colors';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Logo from "../assets/logo.png"
import { login } from '../services/authService';

export default function LoginCard() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    var username = data.get('username');
    var password = data.get('password');
    const user = { username, password }

    const response = await login(user);

    if (response.ok) {
      // Handle successful login
      navigate('/tableau-de-bord');
    };
  }

  return (
    <Container sx={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
    }}>
      <Container maxWidth="xs"
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
        }}>

        <Card sx={{
          width: '100%',
          borderRadius: 2
        }}>

          <CardContent>
            {/* Logo */}
            <div style={{ textAlign: 'center' }}>
              <img src={Logo} alt="Logo" style={{ width: '80px', height: '120px' }} />
            </div>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, alignContent: 'center' }}>
              <Stack direction="column" sx={{ alignItems: 'center' }}>

                <TextField
                  margin="normal"
                  fullWidth
                  required
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  sx={{ borderColor: colors.primary, color: colors.primary }}
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
                  sx={{ mt: 3, mb: 2, background: colors.primary, borderRadius: 3 }}
                >
                  Connect
                </Button>

              </Stack>

            </Box>
          </CardContent>

        </Card>
      </Container>
    </Container>
  );
}