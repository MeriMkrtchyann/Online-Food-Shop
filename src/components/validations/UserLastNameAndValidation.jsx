import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

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

    const isUserLastNameInalid = userLastName.length >= 1 && userLastName.length < 4;

    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
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
                error={isUserLastNameInalid}
            />
            {isUserLastNameInalid ? (
                <FormHelperText error >
                    Last name  must be at least 4 characters long..
                </FormHelperText>
            ): (
                <FormHelperText >
                    Last name  must be at least 4 characters long..
                </FormHelperText>
            )}
        </Grid>
    );
}
