import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function UserAddresAndValidation({addres , setAddres}){

    const handleAddresChange  = ( event ) => {
        setAddres(event.target.value)
    }

    return (
        <Grid item xs={12}style={{ paddingTop: 10 }}>
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
        </Grid>
    )
}