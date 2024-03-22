import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function UserCanfirmPasswordAndValidation({password, aboutUser, setAboutUser}){

    const [canfirmPassword, setCanfirmPassword] = React.useState("")
    const [showCanfirmPassword, setShowCanfirmPassword] = React.useState(false);
    const [isCanfirmPasswordInvalid , setIsCanfirmPasswordInvalid] = React.useState(canfirmPassword.length ? true : false)

    const handlecanfirmPasswordChange  = ( event ) => {
        const canfirmPasswordValue = event.target.value
        setCanfirmPassword(canfirmPasswordValue)
        if (!(password === canfirmPasswordValue) && canfirmPasswordValue.length >= 1) {
            setIsCanfirmPasswordInvalid(true)
            setAboutUser({
              ...aboutUser ,
              aboutUserCanfirmPassword: {
                value : canfirmPasswordValue,
                valid : false,
              }
          })
          } else {
            setIsCanfirmPasswordInvalid(false)
            setAboutUser({
                ...aboutUser ,
                aboutUserCanfirmPassword: {
                    value : canfirmPasswordValue,
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
                Password confirmation must match the original password.
                </FormHelperText>
            ) : (
                <FormHelperText >
                Please confirm your password.
                </FormHelperText>
            )}
        </Grid>
    )
}