import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ChangePasswordModal({setPassword, setNewPassword, censel }){
    return (
        <>
        <Typography sx={{ mt: 3 }}>
            Please enter your old password.
        </Typography>
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
        <Typography sx={{ mt: 3 }}>
            Please enter your new password.
        </Typography>
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                id="newPassword"
                label="New Password"
                name="newPassword"
                autoComplete="off"
                autoFocus
                fullWidth
                onChange={(value) => setNewPassword(value.target.value)}
            />
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 ,  }}>
            <Button
                variant="contained"
                fullWidth
                sx={{ mr: 1 }}
                onClick={ censel }
            >
                Cancel
            </Button>
            <Button
            variant="contained"
            fullWidth
            >
            Change
            </Button>
        </Box>
        </>
    )
}