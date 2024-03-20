import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserNameAndValidation({aboutUser, aboutUserName, setAboutUser}) {

    const [userName, setUserName] = React.useState('');
    const isUserNameInalid = userName.length >= 1 && userName.length < 4;
  
    const handleUserLastNameChange = (event) => {
        const formattedName = event.target.value;
        if (formattedName.length < 15){
            setUserName(formattedName)
            if (userName.length > 3) {
                setAboutUser({
                  ...aboutUser ,
                  [aboutUserName] : {
                    userName : formattedName,
                    valid: true
                  }
              })
              } else {
                setAboutUser({
                    ...aboutUser ,
                    [aboutUserName] : {
                      userName : formattedName,
                      valid: false
                    }
                })
              }
        }
    };

    return (
        <Grid item xs={12}  style={{ paddingTop: 5 }}>
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
                error={isUserNameInalid}
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
