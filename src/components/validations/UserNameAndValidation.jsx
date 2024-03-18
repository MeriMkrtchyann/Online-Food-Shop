import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserNameAndValidation() {
    const [userName, setUserName] = React.useState('');

    const handleUserLastNameChange = (event) => {
        const input = event.target.value;
        if (input.length < 15){
            setUserName(input)
        }
    };

    const isUserNameValid = userName.length > 3;
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
                InputProps={{
                    endAdornment: <ValidOrInvalid isValid={isUserNameValid} isInvalid={isUserNameInalid} />
                }}
            />
        </Grid>
    );
}
