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
import UserPhoneAndValidation from '../../components/validations/UserPhoneAndValidation';
import UserFirstNameAndValidation from '../../components/validations/UserFirstNameAndValidation';
import UserLastNameAndValidation from '../../components/validations/UserLastNameAndValidation';
import UserNameAndValidation from '../../components/validations/UserNameAndValidation';
import UserEmailAndValidation from '../../components/validations/UserEmailAndValidaion';
import UserAddresAndValidation from '../../components/validations/UserAddresAndValidatio';
import UserPasswordValidation from '../../components/validations/UserPasswordValidation';
import UserCanfirmPasswordAndValidation from '../../components/validations/UserCanfirmPasswordAndValidation';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from "../../firebase/firebase"

const defaultTheme = createTheme();

export function SignUpPage() {

  const [obj , setObj] = React.useState({
    aboutUserFirstName : {},
    aboutUserLastName : {},
    aboutUserName : {},
    aboutUserEmail : {},
    aboutUserPhome : {},
    aboutUserAddres : {},
  })

  React.useEffect(()=>{
    console.log("useEffect",JSON.stringify(obj))
  })

  // const handleRegistration = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, obj.aboutUserEmail.email, password);
  //     const user = userCredential.user;
  //     if (user) {
  //       await sendEmailVerification(userCredential.user) 
  //       console.log("Email verification sent");
  //     } else {
  //       setError("Failed to create user");
  //     }
  //   } catch (error) {
  //     console.error('Ошибка при регистрации:', error.message);
  //     setError(error.message);
  //   }
  // };
 
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
              {/* <Box component="form" noValidate onSubmit={handleRegistration} sx={{ mt: 3 }}> */} 
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <UserFirstNameAndValidation aboutUser={obj} aboutUserFirstName={obj.aboutUserFirstName} setObj={setObj}/>
                  <UserLastNameAndValidation aboutUser={obj} aboutUserLastName={obj.aboutUserLastName} setObj={setObj}/>
                  <UserNameAndValidation aboutUser={obj} aboutUserName={obj.aboutUserName} setObj={setObj}/>
                  <UserEmailAndValidation aboutUser={obj} aboutUserEmail={obj.aboutUserEmail} setObj={setObj} />
                  <UserPhoneAndValidation aboutUser={obj} aboutUserPhom={obj.aboutUserPhome} setObj={setObj}/>
                  <UserAddresAndValidation aboutUser={obj} aboutUserAddres={obj.aboutUserAddres} setObj={setObj}/>
                  <UserPasswordValidation aboutUser={obj} aboutUserPassword={obj.aboutUserPassword} setObj={setObj}/>
                  {/*
                  
                
                  
                  
                  <UserCanfirmPasswordAndValidation  password={password}/> */}
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