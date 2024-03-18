import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserPhoneAndValidation(){
    
    const [ contact , setContact ] = React.useState("")

    const isUserNameValid = contact.length > 7;
    const isUserNameInvalid = contact.length && contact.length < 8;

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
                    endAdornment: <ValidOrInvalid isValid={isUserNameValid} isInvalid={isUserNameInvalid} />
                }}
            />
        </Grid>
    )
}