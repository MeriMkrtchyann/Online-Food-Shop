import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function UserCanfirmPasswordAndValidation({password, aboutUserCanfirmPassword, aboutUser, setAboutUser}){

    const [ canfirmPassword, setCanfirmPassword] = React.useState("")
    const [showCanfirmPassword, setShowCanfirmPassword] = React.useState(false);
    let isCanfirmPasswordInvalid = !(password === canfirmPassword) && canfirmPassword.length >= 1

    const handlecanfirmPasswordChange  = ( event ) => {
        const canfirmPassword = event.target.value
        setCanfirmPassword(canfirmPassword)
        if (isCanfirmPasswordInvalid || canfirmPassword.length < 1) {
            setAboutUser({
              ...aboutUser ,
              aboutUserCanfirmPassword: {
                value : canfirmPassword,
                valid : false,
              }
          })
          } else {
            setAboutUser({
                ...aboutUser ,
                aboutUserCanfirmPassword: {
                    value : canfirmPassword,
                    valid : true,
                }
            })
          }
    }

    const togglePasswordVisibility = () => {
        setShowCanfirmPassword(!showCanfirmPassword);
    };
    
    
    return (
        <Grid item xs={12} style={{ paddingTop: 5 }} >
            <TextField
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                type={showCanfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                autoComplete="confirmPassword"
                value={canfirmPassword}
                onChange={handlecanfirmPasswordChange}
                error={isCanfirmPasswordInvalid}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                        style={{marginRight: 2}}
                        >
                        {showCanfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
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