import React from 'react';
import { Container, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import UE from "../assets/UE.png"
const LoginCard = () => {
  return (
    <Container component="main" maxWidth="xs" 
        sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            height: '100vh' 
        }}>

      <Card sx={{ width: '100%', borderRadius: 2 }}>
        <CardContent>
          {/* Logo */}
          <div style={{ textAlign: 'center' }}>
            <img src={UE} alt="Logo" style={{ width: '80px', height: '100px' }} />
          </div>

          {/* Login form */}
          <form>
            <TextField
              margin="normal"
              required
              fullWidth
              id="identifiant"
              label="Identifiant"
              name="identifiant"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="motDePasse"
              label="Mot de passe"
              type="password"
              id="motDePasse"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, borderRadius: 2, backgroundColor: 'primary.main', color: 'white' }}
            >
              Connecter
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginCard;
