import React from 'react';
import { Container, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import UE from "../assets/UE.png"
import { colors } from '../utilities/colors';

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
            <img src={UE} alt="Logo" style={{ width: '80px', height: '120px' }} />
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
              variant="standard"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 3, border: 1.5 ,borderRadius: 20, borderColor:colors.primary}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="motDePasse"
              label="Mot de passe"
              type="password"
              id="motDePasse"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 3, border: 1.5 ,borderRadius: 20, borderColor:colors.primary}}
            />
            <Button
              type="submit"
              width = "50px"
              variant="contained"
              sx={{ mt: 3, borderRadius: 20, backgroundColor: colors.primary, color: 'white' }}
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
