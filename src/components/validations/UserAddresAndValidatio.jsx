import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ValidOrInvalid } from '../icons/Icons';

export default function UserAddresAndValidation(){
    
    const [ addres , setaddres ] = React.useState("")

    const handleAddresChange  = ( event ) => {
        setaddres(event.target.value)
    }

    const isAddresValid = !addres 
    const isInvalid = false

    return (
        <Grid item xs={12}style={{ paddingTop: 10 }}>
            <TextField
                required
                fullWidth
                id="addres"
                label="Email Address"
                type="addres"
                name="addres"
                autoComplete="addres"
                valueemail
                value={addres}
                onChange={handleAddresChange}
                InputProps={{
                    endAdornment: <ValidOrInvalid isValid={isAddresValid} isInvalid={isInvalid} />
                }}
            />
        </Grid>
    )
}