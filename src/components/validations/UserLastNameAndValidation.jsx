import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserLastNameAndValidation({aboutUser, aboutUserLastName, setAboutUser}) {
    
    const [userLastName, setUserLastName] = React.useState('');
    const isUserLastNameInalid = userLastName.length >= 1 && userLastName.length < 2;
  
    const handleUserLastNameChange = (event) => {
        let input = event.target.value;
        const onlyLettersRegex = /^[a-zA-Z]+$/;
        if (input.length < 1) {
          setUserLastName("");
        } else if (input.length < 15 && input.match(onlyLettersRegex)) {
          const formattedName = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
          setUserLastName(formattedName);
          if (userLastName.length >= 2) {
            setAboutUser({
              ...aboutUser ,
              aboutUserLastName : {
                userLastName : formattedName,
                valid: true
              }
          })
          } else {
            setAboutUser({
                ...aboutUser ,
                aboutUserLastName : {
                  userLastName : formattedName,
                  valid: false
                }
            })
          }
        }
      };

    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                 autoComplete="family-name"
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Last Name"
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
