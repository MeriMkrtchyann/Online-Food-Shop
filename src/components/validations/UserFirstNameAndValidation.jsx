import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserFirstNameAndValidation() {
    const [userFirstName, setUserFirstName] = React.useState('');

    const handleUserNameChange = (event) => {
        if (event.target.value !== " " ){
            setUserFirstName(event.target.value);
        }
        
    };

    const isUserNameValid = userFirstName.length > 3;
    const isUserNameInvalid = userFirstName.length > 0 && userFirstName.length < 4;

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
