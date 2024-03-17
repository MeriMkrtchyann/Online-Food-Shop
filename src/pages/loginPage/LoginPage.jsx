import * as React from 'react';
import {GoHomeIcon} from '../../components/icons/Icons';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./LoginPage.css"

const defaultTheme = createTheme();

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" className="loginPage" 
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/loginPageBackgraund.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        sx={{ 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}
        >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
          style={{
              background: "#e1e1e1",
              background: "white",
              borderRadius: "15px",
              boxShadow: '2px 4px 4px rgba(157, 154, 161, 1)',
          }}>
          <Box
            sx={{
              my: 8,
              mx: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Link to="/" className="backButton">
            <GoHomeIcon color="white" />
          </Link> 
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container spacing={2} alignItems="center" justify="center" className="muiLink">
                <Grid item xs>
                  <MuiLink variant="body2" component={Link} to="/forgetPassword" >
                    Forgot password?
                  </MuiLink>
                </Grid>
                <Grid item>
                  <MuiLink variant="body2" component={Link} to="/signUp" >
                    Don't have an account? Sign Up
                  </MuiLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
