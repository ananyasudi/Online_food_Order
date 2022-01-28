import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// vendor or buyer
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import FormPropsTextField from './Student';
// import SweetAlert from 'react-bootstrap-sweetalert';


export default function FormPropsTextFields() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(null);
    const [contact, setContact] = useState("");
    const [role, setRole] = React.useState('');
    const [age, setAge] = useState("");
    const [batch, setBatch] = useState("");
    const [B, setbuyer] = useState("0");
    const [ShopName, setShopName] = useState("");
    const [Password, setPassword] = useState("");


    const handleChange = (event) => {
        setRole(event.target.value);
        if (event.target.value === 'Buyer') {
            setbuyer(10);
            console.log('Buyer reg');
        }
        else if (event.target.value === 'Vendor') {
            setbuyer(20);
            console.log('Vendor reg');
        }
    };
    const onChangeAge = (event) => {
        setAge(event.target.value);
    };
    const onChangeShopName = (event) => {
        setShopName(event.target.value);
    };
    const onChangeUsername = (event) => {
        setName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangeContact = (event) => {
        setContact(event.target.value);
    };
    const onChangeBatch = (event) => {
        setBatch(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    // hideAlert=()=> {
    //     console.log('Hiding alert...');
    //     this.setState({
    //       alert: null
    //     });
    // }

    const resetInputs = () => {
        setName("");
        setEmail("");
        setContact("");
        setAge("");
        setBatch("");
        setShopName("");
        setPassword("");
        setRole("");
        setDate(null);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        // const getAlert = () => (
        //     <SweetAlert 
        //       success 
        //       title="Registered!" 
        //       onConfirm={() => this.hideAlert()}
        //     >
        //       Hello vendor!
        //     </SweetAlert>
        //   );
        
         
        
        if (role === 'Vendor') {
            const newVendor = {
                name: name,
                email: email,
                shopname: ShopName,
                contact: contact,
                password: Password
            };

            axios
                .post("http://localhost:4000/register/vendor", newVendor)
                .then((response) => {
                    alert(response.data);
                    // this.setState({
                    //     alert: getAlert()
                    //   });
                    console.log(response.data);
                    // if(response.data.name!==null){
                    //     alert("Created\t" + response.data.name);
                    //     console.log(response.data);
                    // }
                    // else{
                    //     alert("Email already taken!!try with another one");
                    // }

                });
        }
        else if (role === 'Buyer') {
            // navigate("/register/buyer");
            const newBuyer = {
                name: name,
                email: email,
                age: age,
                contact: contact,
                batch: batch,
                password: Password
            };

            axios
                .post("http://localhost:4000/register/buyer", newBuyer)
                .then((response) => {
                    alert(response.data);
                    //   alert("Created\t" + response.data.name);
                    //   console.log(response.data);
                });



        }

        resetInputs();
    };

    return (
        <div>
            <Grid container align={"center"} spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={onChangeUsername}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="contact"
                        variant="outlined"
                        value={contact}
                        onChange={onChangeContact}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        variant="outlined"
                        value={Password}
                        onChange={onChangePassword}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{ Width: 200 }}>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={role}
                                label="Role"
                                onChange={handleChange}
                            >
                                <MenuItem value="Buyer">Buyer</MenuItem>
                                <MenuItem value="Vendor">Vendor</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                {B === 10 && <Grid item xs={12}>
                    <TextField
                        label="Age"
                        variant="outlined"
                        value={age}
                        onChange={onChangeAge}
                    />
                </Grid>}
                {B === 10 && <Grid item xs={12}>
                    <FormControl className='batch'>
                        <InputLabel id="demo-simple-select-label">BatchName</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={batch}
                            label="BatchName"
                            onChange={onChangeBatch}
                        >
                            <MenuItem value={10}>UG1</MenuItem>
                            <MenuItem value={20}>UG2</MenuItem>
                            <MenuItem value={30}>UG3</MenuItem>
                            <MenuItem value={30}>UG4</MenuItem>
                            <MenuItem value={30}>UG5</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>}
                {B !== 10 && B != 0 && <Grid item xs={12}>
                    <TextField
                        label="ShopName"
                        variant="outlined"
                        value={ShopName}
                        onChange={onChangeShopName}
                    />
                </Grid>}
                <Grid item xs={12}>
                    <Button variant="contained" onClick={onSubmit}>
                        Register
                    </Button>
                </Grid>
                
            </Grid>
            {/* {this.state.alert} */}
        </div>
    );
}
