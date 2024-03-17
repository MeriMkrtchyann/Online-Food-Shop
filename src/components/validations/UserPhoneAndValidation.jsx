import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function UserPhoneAndValidation(){
    
    const [ contact , setContact ] = React.useState("")

    const isUserNameValid = contact.length > 7;
    const isUserNameInvalid = contact.length > 0 && contact.length < 8;

    let iconColor = '';
    if (isUserNameValid) {
        iconColor = 'green';
    } else if (isUserNameInvalid) {
        iconColor = 'red';
    }

    const handleContactChange  = ( event ) => {
      console.log(event.target.value.slice(6,))
      if (!(event.target.value.startsWith("(+374) 0"))){
        let number = event.target.value.slice(5,event.target.value.length).replace(/\D/g, '')
        if (number.length < 9 ){
          setContact(number);
        }
        return
      }
    }

    return (
        <Grid item xs={12}
            style={{
                paddingTop: 10
            }}
        >
            <input type="hidden" name="contact" value={contact} />
            <TextField
                required
                fullWidth
                id="contact"
                label="Contact"
                type="text"
                name="formattedContact"
                autoComplete="contact"
                value={`(+374) ${contact}`}
                onChange={handleContactChange}
                InputProps={{
                    endAdornment: iconColor && (
                        <CheckCircleOutlineIcon style={{ color: iconColor }} />
                    ),
                }}
            />
        </Grid>
    )
}