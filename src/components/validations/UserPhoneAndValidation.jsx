import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserPhoneAndValidation({contact , setContact}){

    const isUserNameInvalid = contact.length >= 1 && contact.length < 8;

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
            />
            {isUserNameInvalid && (
                <FormHelperText error>
                    Please enter a valid phone number.
                </FormHelperText>
            )}
            
        </Grid>
    )
}