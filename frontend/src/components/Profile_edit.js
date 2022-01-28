import axios from "axios";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "./Input";
import Foods from "./Foods";
import SearchAppBar from "./NavBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";



const INITIAL_STATE = {
  id: '',
  name: '',
  contact: '',
  age: 0,
  batch: '',
};

export default function Profile_edit(props) {
  const [user, setUser] = useState(INITIAL_STATE);
  const [batch, setBatch] = useState("");
  const [edit_, setEdit] = useState(false);
  const [read_, setReadOnly] = useState(true);


  const ID = localStorage.getItem("userid");
  const ob = {
    "ID": ID
  };
  const handleEdit=(e)=>{
    setEdit(true);
    setReadOnly(false);
  }
  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  };
  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setEdit(false)
    setReadOnly(true)
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.post(`http://localhost:4000/buyer/edit`, user);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .post(`http://localhost:4000/buyer/${ID}/getU`, ob)
      .then((response) => {
        setUser({
          ...user,
          id: ob.ID,
          name: response.data.name,
          contact: response.data.contact,
          age: response.data.age,
          batch: response.data.batch
        })
        console.log(response.data);
        console.log(ID);
        // console.log(id);

      });
  }, []);

  return (
    <div >
      <SearchAppBar obj_id={ob}></SearchAppBar>
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
          value={user.name}
        />
        <br />
        <Input handleInput={handleInput}
          read_val={read_}
          name="contact"
          type="text"
          label_="contact"
          value={user.contact}
          placeholder={"Your contact"}
        />
        <br />
        <Input handleInput={handleInput}
          read_val={read_}
          name="age"
          type="number"
          label_="Age"
          value={user.age}
          placeholder={"Your names"}
        />
        <br />
        <InputLabel id="demo-simple-select-label">BatchName</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={batch}
          label="BatchName"
          disabled={read_}
          onChange={onChangeBatch}
        >
          <MenuItem value="UG1">UG1</MenuItem>
          <MenuItem value="UG2">UG2</MenuItem>
          <MenuItem value="UG3">UG3</MenuItem>
          <MenuItem value="UG4">UG4</MenuItem>
          <MenuItem value="UG5">UG5</MenuItem>

        </Select>

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