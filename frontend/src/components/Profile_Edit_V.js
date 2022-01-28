import axios from "axios";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "./Input";
import Foods from "./Foods";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SearchAppBar_V from "./NavBar_V";
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';



const INITIAL_STATE = {
    id: '',
    name: '',
    contact: '',
    shop_name: '',
    shop_open: '',
    shop_close: '',
};

export default function Profile_edit_V(props) {
    const [vendor, setUser] = useState(INITIAL_STATE);
    const [batch, setBatch] = useState("");
    const [edit_, setEdit] = useState(false);
    const [read_, setReadOnly] = useState(true);
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };


    const ID = localStorage.getItem("vendorid");
    const ob = {
        "ID": ID
    };
    const handleEdit = (e) => {
        setEdit(true);
        setReadOnly(false);
    }
    const onChangeBatch = (event) => {
        setBatch(event.target.value);
    };
    const handleInput = (e) => {
        console.log(e.target.name, " : ", e.target.value);
        setUser({ ...vendor, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        setEdit(false)
        setReadOnly(true)
        e.preventDefault();
        try {
            console.log("Data for update : ", vendor);
            const response = await axios.post(`http://localhost:4000/vendor/edit`, vendor);
            alert(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        axios
            .post(`http://localhost:4000/vendor`, ob)
            .then((response) => {
                setUser({
                    ...vendor,
                    id: ob.ID,
                    name: response.data.vendor_name,
                    contact: response.data.contact,
                    shop_name: response.data.shop_name,
                    // shop_open: '',
                    // shop_close: ''
                })
                console.log(response.data);
                console.log(ID);
                // console.log(id);

            });
    }, []);

    return (
        <div >
            <SearchAppBar_V obj_id={ob}></SearchAppBar_V>
            <form style={{ alignItems: 'center' }}>
                <div id='button'>
                    <Button onClick={handleEdit}>
                        Edit</Button>
                </div>
                <Input handleInput={handleInput}
                    read_val={read_}
                    name="name"
                    label_="name"
                    type="text"
                    value={vendor.name}
                />
                <br />
                <Input handleInput={handleInput}
                    read_val={read_}
                    name="contact"
                    type="text"
                    label_="contact"
                    value={vendor.contact}
                    placeholder={"Your contact"}
                />
                <br />
                <Input handleInput={handleInput}
                    read_val={read_}
                    name="shop_name"
                    type="text"
                    label_="ShopName"
                    value={vendor.shop_name}
                    placeholder={"Your names"}
                />
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Time"
                    value={value}
                    disabled={read_}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                <br />
                {edit_ === true && <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSubmit}>
                        Update
                    </Button>
                </Grid>}
            </form>
            <h2>editing of profile</h2>
        </div>
    )
}