import { AppBar, Typography } from "@mui/material";

export default function Header() {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Typography variant='h6'>
                Enterprise Shopping
            </Typography>
        </AppBar>
    )
}