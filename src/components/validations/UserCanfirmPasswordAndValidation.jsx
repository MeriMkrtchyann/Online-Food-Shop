import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserCanfirmPasswordAndValidation({password}){

    const [ canfirmPassword, setCanfirmPassword] = React.useState("")

    const handlecanfirmPasswordChange  = ( event ) => {
        setCanfirmPassword(event.target.value)
    }
    
    let isCanfirmPasswordInvalid = canfirmPassword.length >=1 && !(password === canfirmPassword)

    return (
        <Grid item xs={12} style={{ paddingTop: 5 }} >
            <TextField
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                autoComplete="confirmPassword"
                valueemail
                value={canfirmPassword}
                onChange={handlecanfirmPasswordChange}
                error={isCanfirmPasswordInvalid}
            />
            {isCanfirmPasswordInvalid ? (
                <FormHelperText error>
                Password confirmation must match the original password..
                </FormHelperText>
            ) : (
                <FormHelperText >
                Please confirm your password
                </FormHelperText>
            )}
        </Grid>
    )
}