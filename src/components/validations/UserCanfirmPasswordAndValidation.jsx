import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserCanfirmPasswordAndValidation({password}){

    const [ canfirmPassword, setCanfirmPassword] = React.useState("")

    const handlecanfirmPasswordChange  = ( event ) => {
        setCanfirmPassword(event.target.value)
    }
    
    let isCanfirmPasswordValid = password === canfirmPassword
    let isCanfirmPasswordInvalid = !(password === canfirmPassword)

    return (
        <Grid item xs={12}
            style={{
                paddingTop: 10
            }}
        >
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
                InputProps={{
                    endAdornment: <ValidOrInvalid isValid={isCanfirmPasswordValid} isInvalid={isCanfirmPasswordInvalid} />
                }}
            />
        </Grid>
    )
}