import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserFirstNameAndValidation({userFirstName, setUserFirstName}) {
    
    const handleUserNameChange = (event) => {
        const input = event.target.value;
        const onlyLettersRegex = /^[a-zA-Z]+$/
        if (!input.length ){
            setUserFirstName("")
        }else if (input.length < 15 && input.match(onlyLettersRegex)){
            const formattedFirstName = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); 
            setUserFirstName(formattedFirstName);
        }
    };

    const isUserNameInvalid = userFirstName.length >= 1 && userFirstName.length < 4;

    return (
        <Grid item xs={12}  style={{ paddingTop: 5 }}>
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
                error={isUserNameInvalid}
            />
             {isUserNameInvalid ? (
                <FormHelperText error>
                    First name must be at least 4 characters long..
                </FormHelperText>
            ) : (
                <FormHelperText >
                    First name must be at least 4 characters long..
                </FormHelperText>
            )}
        </Grid>
    );
}
