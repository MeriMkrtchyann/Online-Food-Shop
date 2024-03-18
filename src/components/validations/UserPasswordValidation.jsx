import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserPasswordValidation(){

    const [ password, setPassword] = React.useState("")

    const handlePasswordChange  = ( event ) => {
        setPassword(event.target.value)
    }
    
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[\w@$!%*?&.\\]{8,}$/;
    let isPasswordValid = password.match(passwordValidationRegex);
    let isPasswordInvalid = !isPasswordValid;

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
                InputProps={{
                    endAdornment: <ValidOrInvalid isValid={isPasswordValid} isInvalid={isPasswordInvalid} />
                }}
            />
        </Grid>
    )
}