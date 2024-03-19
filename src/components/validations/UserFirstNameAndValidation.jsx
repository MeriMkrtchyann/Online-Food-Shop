import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserFirstNameAndValidation({userFirstName, setUserFirstName}) {
    
    const handleUserNameChange = (event) => {
        const input = event.target.value;
        const onlyLettersRegex = /^[a-zA-Z]+$/
        if (!input.length ){
            setUserFirstName("")
        }
        if (input.length < 15 && input.match(onlyLettersRegex)){
            const formattedFirstName = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); 
            setUserFirstName(formattedFirstName);
        }
    };

    const isUserNameValid = userFirstName.length > 3;
    const isUserNameInvalid = userFirstName.length >= 1 && userFirstName.length < 4;

    return (
        <Grid item xs={12} sm={6} style={{ paddingTop: 10 }}>
            <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={userFirstName}
                onChange={handleUserNameChange}
                InputProps={{
                    endAdornment: <ValidOrInvalid isValid={isUserNameValid} isInvalid={isUserNameInvalid} />
                }}
            />
        </Grid>
    );
}
