import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

const UserFirstNameAndValidation = ({aboutUser, aboutUserFirstName, setObj }) => {
  
  const [userFirstName, setUserFirstName] = React.useState("");
  const isUserNameInvalid = userFirstName.length >= 1 && userFirstName.length < 4;

  const handleUserNameChange = (event) => {
    let input = event.target.value;
    const onlyLettersRegex = /^[a-zA-Z]+$/;
    if (!input.length) {
      setUserFirstName("");
    } else if (input.length < 15 && input.match(onlyLettersRegex)) {
      const formattedName = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      setUserFirstName(formattedName);
      if (userFirstName.length > 3) {
        setObj({
          ...aboutUser ,
          aboutUserFirstName : {
            userFirstName : formattedName,
            valid: true
          }
      })
      } else {
        setObj({
            ...aboutUser ,
            aboutUserFirstName : {
              userFirstName : formattedName,
              valid: false
            }
        })
      }
    }
  };

  return (
    <Grid item xs={12}>
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
        <FormHelperText error>First name must be at least 4 characters long.</FormHelperText>
      ) : (
        <FormHelperText>First name must be at least 4 characters long.</FormHelperText>
      )}
    </Grid>
  );
};

export default UserFirstNameAndValidation;
