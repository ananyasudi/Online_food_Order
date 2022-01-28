import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();

    const [Password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = React.useState('');
    const [B, setbuyer] = useState("0");
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(email);
        // console.log(Password);
        // console.log(role);
        const person={
            email:email,
            password:Password,
        };
        axios
            .post("http://localhost:4000/login", person)
            .then((response)=>{
                if(response.data.role==='buyer'){
                        localStorage.setItem("userid",response.data.elem._id);
                        window.location.href=`/buyer/${response.data.elem._id}`;

                }
                else if(response.data.role==='vendor'){
                    // alert("Found in vendor");
                    localStorage.setItem("vendorid",response.data.elem._id);
                    window.location.href=`/vendor/${response.data.elem._id}`;
                }
                else if(response.data==='Invalid credentials'){
                    alert("Invalid Credentials");
                }
                else{
                    alert("Email not found");
                    console.log(response.data);
                }
                // console.log(response.data);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </Box>
                <Grid container align={"center"} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </Grid>
                    <p></p>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            value={Password}
                            onChange={onChangePassword}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={handleSubmit}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}