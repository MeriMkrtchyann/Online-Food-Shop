import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserPhoneAndValidation({aboutUser, aboutUserPhome , setAboutUser}){

    const [phone , setPhone] = React.useState("")
    const isUserPhoneInvalid = phone.length >= 1 && phone.length < 8;

    const handleContactChange  = ( event ) => {
      console.log(event.target.value.slice(6,))
      if (!(event.target.value.startsWith("(+374) 0"))){
        let number = event.target.value.slice(5,event.target.value.length).replace(/\D/g, '')
        if (number.length < 9 ){
           setPhone(number);
        }
        if (isUserPhoneInvalid || number.length < 4) {
            setAboutUser({
              ...aboutUser ,
              aboutUserPhome: {
                value : `+374${phone}`,
                valid : false,
              }
          })
          } else {
            setAboutUser({
                ...aboutUser ,
                aboutUserPhome: {
                    value : `+374${phone}`,
                    valid : true,
                }
            })
          }
      }
    }

    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <input type="hidden" name="contact" value={phone} />
            <TextField
                required
                fullWidth
                id="contact"
                label="Contact"
                type="text"
                name="formattedContact"
                autoComplete="contact"
                value={`(+374) ${phone}`}
                onChange={handleContactChange}
                error={isUserPhoneInvalid}
            />
            {isUserPhoneInvalid ? (
                <FormHelperText error>
                    Please enter a valid phone number.
                </FormHelperText>
            ): (
                <FormHelperText>
                    Please enter a valid phone number.
                </FormHelperText>
            )}
            
        </Grid>
    )
}