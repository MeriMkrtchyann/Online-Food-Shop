import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function ChangePasswordModal({setPassword, setNewPassword}){
    return (
        <>
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                id="password"
                label="Password"
                name="password"
                autoComplete="off"
                autoFocus
                fullWidth
                onChange={(value) => setPassword(value.target.value)}
            />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                id="newPassword"
                label="New Password"
                name="newPassword"
                autoComplete="off"
                autoFocus
                fullWidth
                onChange={(value) => setPassword(value.target.value)}
            />
        </Grid>
        
        </>
    )
}