import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserNameAndValidation({userName, setUserName}) {

    const handleUserLastNameChange = (event) => {
        const input = event.target.value;
        if (input.length < 15){
            setUserName(input)
        }
    };

    const isUserNameInalid = userName.length >= 1 && userName.length < 4;

    return (
        <Grid item xs={12}  style={{ paddingTop: 10 }}>
            <TextField
                autoComplete="username"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={userName}
                onChange={handleUserLastNameChange}
            />
             {isUserNameInalid ? (
                <FormHelperText error>
                    Username name must be at least 4 characters long..
                </FormHelperText>
            ):(
                <FormHelperText >
                    Username name must be at least 4 characters long..
                </FormHelperText>
            )}
        </Grid>
    );
}
