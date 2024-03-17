import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function UserFirstNameAndValidation() {
    const [userFirstName, setUserFirstName] = React.useState('');

    const handleUserNameChange = (event) => {
        if (event.target.value !== " "){
            setUserFirstName(event.target.value);
        }
        
    };

    const isUserNameValid = userFirstName.length > 3;
    const isUserNameInvalid = userFirstName.length > 0 && userFirstName.length < 4;

    let iconColor = '';
    if (isUserNameValid) {
        iconColor = 'green';
    } else if (isUserNameInvalid) {
        iconColor = 'red';
    }

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
                    endAdornment: iconColor && (
                        <CheckCircleOutlineIcon style={{ color: iconColor }} />
                    ),
                }}
            />
        </Grid>
    );
}
