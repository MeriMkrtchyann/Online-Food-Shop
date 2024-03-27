import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import UserPasswordValidation from '../validations/UserPasswordValidation';

export default function ChangePasswordModal({setPassword, setNewPassword, censel, handleSubmit, color, errorText }){

    const [showPassword, setShowPassword] = useState(false)
    // const [showNewPassword, setShowNewPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // const toggleNewPasswordVisibility = () => {
    //     setShowNewPassword(!showNewPassword);
    // };

    return (
        <>
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                id="password"
                label="Old Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="off"
                autoFocus
                fullWidth
                onChange={(value) => setPassword(value.target.value)}
                InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                    style={{marginRight: 2}}
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                ),
             }}
            />
        </Grid>
        {/* <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                id="newPassword"
                label="New Password"
                name="newPassword"
                autoComplete="off"
                type={showNewPassword ? 'text' : 'password'}
                autoFocus
                fullWidth
                onChange={(value) => setNewPassword(value.target.value)}
                InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleNewPasswordVisibility}
                    edge="end"
                    style={{marginRight: 2}}
                    >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                ),
             }}
            />
        </Grid> */}
        <UserPasswordValidation setNewPassword={setNewPassword}/>
        <FormHelperText error style={{color : `${color}`}}>{errorText}</FormHelperText>
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
            type="submit"
            fullWidth
            onClick={handleSubmit}
            >
            Change
            </Button>
        </Box>
        </>
    )
}