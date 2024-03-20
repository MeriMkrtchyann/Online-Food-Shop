import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserEmailAndValidation({ email , setEmail }){

    const handleEmailChange  = ( event ) => {
        setEmail(event.target.value)
    }

    let emailValidationRegex = ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    let isEmailInvalid = email.length >= 1  && !email.match(emailValidationRegex)

    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                autoComplete="email"
                valueemail
                value={email}
                onChange={handleEmailChange}
                error={isEmailInvalid}
            />
            {isEmailInvalid ? (
                <FormHelperText error>
                    Please enter a valid email address.
                </FormHelperText>
            ):(
                <FormHelperText>
                    Please enter a valid email address.
                </FormHelperText>
            )}
        </Grid>
    )
}