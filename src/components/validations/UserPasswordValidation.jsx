import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserPasswordValidation({aboutUserPassword, aboutUser, setObj }){

    const [password , setPassword] = React.useState("")
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[\w@$!%*?&.\\]{8,}$/;
    let isPasswordInvalid = password.length>=1 && password.length <= 7  && !password.match(passwordValidationRegex);

    const handlePasswordChange  = ( event ) => {
        setPassword(event.target.value)
        if (isPasswordInvalid || password.length < 1) {
            setObj({
              ...aboutUser ,
              [aboutUser]: {
                value : password,
                valid : false,
              }
          })
          } else {
            setObj({
                ...aboutUser ,
                [aboutUser]: {
                  value : password,
                  valid : true,
                }
            })
          }

    }
   
    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
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
                error={isPasswordInvalid}
            />
             {isPasswordInvalid ? (
                <FormHelperText error>
                    Please enter a password with at least 7 characters (uppercase,  lowercase, number, simbol)
                </FormHelperText>
            ) : (
                <FormHelperText>
                    Please enter a password with at least 7 characters (uppercase, lowercase, number, simbol)
                </FormHelperText>
            ) }
        </Grid>
    )
}