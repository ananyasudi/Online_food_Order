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


export default function FormPropsTextField() {
    const [age, setAge] = useState("");
    const [batch, setBatch] = useState("");

    // const [age,setAge]=useState("");

    const onChangeAge = (event) => {
        setAge(event.target.value);
    };

    const onChangeBatch = (event) => {
        setBatch(event.target.value);
    };

    const resetInputs = () => {
        setAge("");
        setBatch("");
    };
    return (
        <div>
            <Grid container align={"center"} spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Age"
                        variant="outlined"
                        value={age}
                        onChange={onChangeAge}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Batch"
                        variant="outlined"
                        value={batch}
                        onChange={onChangeBatch}
                    />
                </Grid>

            </Grid>
        </div>
    );
}
