import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function UserPasswordValidation({ aboutUser, aboutUserPassword, setAboutUser, setPassword = "" ,password }){

    const [showPassword, setShowPassword] = React.useState(false)
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[\w@$!%*?&.\\]{8,}$/;
    let isPasswordInvalid =  !password.match(passwordValidationRegex) && (password.length >= 1 || password.length <= 7)
    
    const handlePasswordChange  = ( event ) => {
            const password = event.target.value
            setPassword(password)
            if (isPasswordInvalid || password.length < 1 ) {
                setAboutUser({
                  ...aboutUser ,
                  aboutUserPassword: {
                    value : password,
                    valid : false,
                  }
              })
            } else {
                setAboutUser({
                    ...aboutUser ,
                    aboutUserPassword: {
                        value : password,
                        valid : true,
                    }
                })
            }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
   
    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                fullWidth
                id="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                autoComplete="newPassword"
                value={password}
                onChange={handlePasswordChange}
                error={isPasswordInvalid}
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
             {isPasswordInvalid ? (
                <FormHelperText error>
                    Please enter a password with at least 8 characters (uppercase,  lowercase, number, simbol)
                </FormHelperText>
            ) : (
                <FormHelperText>
                    Please enter a password with at least 8 characters (uppercase, lowercase, number, simbol)
                </FormHelperText>
            ) }
        </Grid>
    )
}