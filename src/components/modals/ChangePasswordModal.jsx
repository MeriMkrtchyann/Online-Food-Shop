import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export default function ChangePasswordModal({setPassword, setNewPassword, censel, handleSubmit }){

    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    return (
        <>
        <Typography sx={{ mt: 3 }}>
            Please enter your old password.
        </Typography>
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                id="password"
                label="Password"
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
        <Typography sx={{ mt: 3 }}>
            Please enter your new password.
        </Typography>
        <Grid item xs={12} style={{ paddingTop: 5 }}>
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
        </Grid>
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