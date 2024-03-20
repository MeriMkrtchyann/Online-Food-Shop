import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserAddresAndValidation({aboutUser , aboutUserAddres , setAboutUser}){

    const [addres , setAddres] = React.useState("")

    const handleAddresChange  = ( event ) => {
        const addres = event.target.value
        setAddres(addres)
        setAboutUser({
            ...aboutUser ,
            aboutUserAddres: {
              value : addres,
              valid : true,
            }
        })
    }

    return (
        <Grid item xs={12}style={{ paddingTop: 5 }}>
            <TextField
                required
                fullWidth
                id="addres"
                label="Address"
                type="addres"
                name="addres"
                autoComplete="addres"
                valueemail
                value={addres}
                onChange={handleAddresChange}
            />
            <FormHelperText>
                Please enter your address. (Optional)
            </FormHelperText>
        </Grid>
    )
}