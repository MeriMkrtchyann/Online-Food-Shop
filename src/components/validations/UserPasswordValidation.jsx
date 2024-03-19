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
             {isPasswordInvalid && (
                <FormHelperText error>
                Password must be at least 8 characters long contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                </FormHelperText>
            )}
        </Grid>
    )
}