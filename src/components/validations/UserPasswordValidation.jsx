import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserPasswordValidation({password, setPassword}){

    const handlePasswordChange  = ( event ) => {
        setPassword(event.target.value)
    }
    
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[\w@$!%*?&.\\]{8,}$/;
    let isPasswordInvalid = password.length>=1 && password.length <= 7  && !password.match(passwordValidationRegex);

    return (
        <Grid item xs={12}
            style={{
                paddingTop: 10
            }}
        >
            <TextField
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                name="password"
                autoComplete="newPassword"
                valueemail
                value={password}
                onChange={handlePasswordChange}
            />
             {isPasswordInvalid ? (
                <FormHelperText error>
                    Please enter a password with at least 7 characters (uppercase,  lowercase, number, simbold)
                </FormHelperText>
            ) : (
                <FormHelperText>
                    Please enter a password with at least 7 characters (uppercase, lowercase, number, special, simbold)
                </FormHelperText>
            ) }
        </Grid>
    )
}