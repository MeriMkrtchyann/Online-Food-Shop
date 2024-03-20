import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserCanfirmPasswordAndValidation({password, userCanfirmPassword, aboutUser, setAboutUser}){

    const [canfirmPassword, setCanfirmPassword] = React.useState('');
    let isCanfirmPasswordInvalid = canfirmPassword.length >=1 && !(password === canfirmPassword)

    const handlecanfirmPasswordChange  = ( event ) => {
        setCanfirmPassword(event.target.value)
        if (isCanfirmPasswordInvalid) {
            setAboutUser({
              ...aboutUser ,
              [userCanfirmPassword]: {
                value : canfirmPassword,
                valid : false,
              }
            })
        } else {
            setAboutUser({
                ...aboutUser ,
                [userCanfirmPassword]: {
                    value : canfirmPassword,
                    valid : true,
                }
            })
          }
    }
    
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