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

const defaultTheme = createTheme();

export default function SignUp() {

  const [ contact , setContact ] = React.useState("")

  const handleContactChange  = ( event ) => {
    console.log(event.target.value.slice(6,))
    if (!(event.target.value.startsWith("(+374) 0"))){
      let number = event.target.value.slice(5,event.target.value.length).replace(/\D/g, '')
      if (number.length < 9 ){
        setContact(number);
      }
      return
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      contact: `+374 (${contact})`,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Link to="/" className="backButton">
            <GoHomeIcon color="black" />
      </Link> 
      <Container component="main" maxWidth="xs">
        <div className="backButton">
          <CssBaseline />
        </div>
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
              <Grid item xs={12} sm={6} 
                style={{
                  paddingTop: 10
                }}
              >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
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
              <Grid item xs={12}
                style={{
                  paddingTop: 10
                }}
              >
              <input type="hidden" name="contact" value={contact} />
              <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact"
                  type="text"
                  name="formattedContact"
                  autoComplete="contact"
                  value={`(+374) ${contact}`}
                  onChange={handleContactChange}
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
    </ThemeProvider>
  );
}