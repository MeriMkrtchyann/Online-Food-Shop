import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserEmailAndValidation({ email , setEmail }){

    const handleEmailChange  = ( event ) => {
        setEmail(event.target.value)
    }

    let emailValidationRegex = ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    let isEmailValid = email.match(emailValidationRegex)
    let isEmailInvalid = email.length && !email.match(emailValidationRegex)

    return (
        <Grid item xs={12}
            style={{
                paddingTop: 10
            }}
        >
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
                InputProps={{
                    endAdornment: <ValidOrInvalid isValid={isEmailValid} isInvalid={isEmailInvalid} />
                }}
            />
        </Grid>
    )
}