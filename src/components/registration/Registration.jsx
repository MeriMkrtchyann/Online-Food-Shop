import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoHomeIcon } from '../../components/icons/Icons';
import UserFirstNameAndValidation from "../validations/UserFirstNameAndValidation"
import UserLastNameAndValidation from "../validations/UserLastNameAndValidation"
import UserNameAndValidation from "../validations/UserNameAndValidation"
import UserEmailAndValidation from "../validations/UserEmailAndValidaion"
import UserPhoneAndValidation from "../validations/UserPhoneAndValidation"
import UserAddresAndValidation from "../validations/UserAddresAndValidatio"
import UserPasswordValidation from "../validations/UserPasswordValidation"
import UserCanfirmPasswordAndValidation from "../validations/UserCanfirmPasswordAndValidation"

const defaultTheme = createTheme();

export function Registraion({aboutUser , setAboutUser, handleRegistration, }) {
  return (
    <ThemeProvider theme={defaultTheme} >
          <Grid container component="main" className="SignUpPage"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/loginPageBackgraund.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
            sx={{ 
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
                  marginTop: "20px",
                  marginBottom: "20px",
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
              <Box component="form" noValidate onSubmit={handleRegistration} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <UserFirstNameAndValidation aboutUser={aboutUser} aboutUserFirstName={aboutUser.aboutUserFirstName} setAboutUser={setAboutUser}/>
                  <UserLastNameAndValidation aboutUser={aboutUser} aboutUserLastName={aboutUser.aboutUserLastName} setAboutUser={setAboutUser}/>
                  <UserNameAndValidation aboutUser={aboutUser} aboutUserName={aboutUser.aboutUserName} setAboutUser={setAboutUser}/>
                  <UserEmailAndValidation aboutUser={aboutUser} aboutUserEmail={aboutUser.aboutUserEmail} setAboutUser={setAboutUser} />
                  <UserPhoneAndValidation aboutUser={aboutUser} aboutUserPhom={aboutUser.aboutUserPhome} setAboutUser={setAboutUser}/>
                  <UserAddresAndValidation aboutUser={aboutUser} aboutUserAddres={aboutUser.aboutUserAddres} setAboutUser={setAboutUser}/>
                  <UserPasswordValidation aboutUser={aboutUser} aboutUserPassword={aboutUser.aboutUserPassword} setAboutUser={setAboutUser}/>
                  <UserCanfirmPasswordAndValidation password={aboutUser.aboutUserPassword.value} aboutUser={aboutUser} aboutCserCanfirmPassword={aboutUser.aboutUserCanfirmPassword} setAboutUser={setAboutUser}/> 
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