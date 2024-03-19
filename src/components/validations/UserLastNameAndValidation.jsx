import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserLastNameAndValidation({userLastName, setUserLastName}) {

    const handleUserLastNameChange = (event) => {
        const input = event.target.value;
        const onlyLettersRegex = /^[a-zA-Z]+$/
        if (!input.length ){
            setUserLastName("")
        }
        if (input.length < 15 && input.match(onlyLettersRegex)){
            const formattedFirstName = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); 
            setUserLastName(formattedFirstName);
        }
    };

    const isUserLastNameValid = userLastName.length > 3 
    const isUserLastNameInalid = userLastName.length >= 1 && userLastName.length < 4;

    return (
        <Grid item xs={12} sm={6} style={{ paddingTop: 10 }}>
            <TextField
                 autoComplete="family-name"
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
                value={userLastName}
                onChange={handleUserLastNameChange}
                InputProps={{
                    endAdornment: <ValidOrInvalid isValid={isUserLastNameValid} isInvalid={isUserLastNameInalid} />
                }}
            />
        </Grid>
    );
}
