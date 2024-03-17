import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoHomeIcon } from '../../components/icons/Icons';
import UserPhoneAndValidation from '../../components/validations/UserPhoneAndValidation';
import UserFirstNameAndValidation from '../../components/validations/UserFirstNameAndValidation';

const defaultTheme = createTheme();

export default function SignUp() {

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
      <Grid container component="main" className="SignUpPage"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/loginPageBackgraund.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        sx={{ 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}
      >
      <Link to="/" className="backButton">
            <GoHomeIcon color="white" />
      </Link> 
      <Grid xs={12} sm={8} md={5} elevation={6} square 
          style={{
              background: "white",
              borderRadius: "15px",
              boxShadow: '2px 4px 4px rgba(157, 154, 161, 1)',
          }}>
          <Container component="main" >
        <CssBaseline />
        <Box
          sx={{
            margin : 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <UserFirstNameAndValidation/>
              <Grid item xs={12} sm={6}
                style={{
                  paddingTop: 10
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}
                style={{
                  paddingTop: 10
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}
                style={{
                  paddingTop: 10
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <UserPhoneAndValidation/>
              <Grid item xs={12}
                style={{
                  paddingTop: 10
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}
                style={{
                  paddingTop: 10
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="newPassword"
                />
              </Grid>
              <Grid item xs={12}
                style={{
                  paddingTop: 10
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <MuiLink variant="body2" component={Link} to="/signIn" >
                  Already have an account? Sign in
                </MuiLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
          
      </Grid>
      
      </Grid>
    </ThemeProvider>
  );
}