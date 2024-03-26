import {GoHomeIcon} from '../../components/icons/Icons';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import passReset from "../../services/passReset.js";
import { useState } from 'react';
import ChangePasswordModal from '../modals/ChangePasswordModal.jsx';

const defaultTheme = createTheme();

export default function PassReset({setEmail, email, setPassword, setNewPassword}) {

    const navigate = useNavigate()
    const [modal , setModal] = useState(false)

    const openModal = () => {
      const user = passReset(email)
      if (user){
        setModal(true)
      }
    }

    const censel = () => {
      setModal(false)
      navigate("/signIn")
    }

    return(
        <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" className="findPage" 
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
          <CssBaseline />
          <Grid item sm={9} md={5} component={Paper} elevation={6} square 
            style={{
                background: "white",
                borderRadius: "15px",
                boxShadow: '2px 4px 4px rgba(157, 154, 161, 1)',
            }}>
            <Box
              sx={{
                my: 8,
                mx: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            <Link to="/" className="backButton">
              <GoHomeIcon color="white" />
            </Link> 
              <Typography component="h1" variant="h5">
                Find your account
              </Typography>
              <Box component="form" sx={{ mt: 1 }}>
              {!modal ?
              <>
                <Typography sx={{ mt: 3 }}>
                Please enter your email to search for your account.
                </Typography>
                <Grid item xs={12} style={{ paddingTop: 5 }}>
                  <TextField
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="off"
                    autoFocus
                    fullWidth
                    onChange={(value) => setEmail(value.target.value)}
                  />
                </Grid> 
              </>
              :
                <ChangePasswordModal setPassword={setPassword} setNewPassword={setNewPassword}/>
              }
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 ,  }}>
                  <Button
                      variant="contained"
                      fullWidth
                      sx={{ mr: 1 }}
                      onClick={ censel }
                    >
                      Cancel
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={openModal}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
}