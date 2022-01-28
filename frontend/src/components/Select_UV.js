// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import {Button} from '@material-ui/core';
// import "./Select_UV.css";
// import FormPropsTextField from './Register';
// export default function ControlledRadioButtonsGroup() {
//   const [value, setValue] = React.useState('Buyer');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };


//   const onSubmit = (value) => {
//     console.log(value);
//     ;

//     // if(event.value==='Buyer'){
//     //     console.log("buyer's register");
//     //     // buyer reg form
//     // }
//     // else if(event.value==='Vendor'){
//     //     //vendor ka reg form
//     //     console.log("vendor's registration");

//     // }

//     // resetInputs();
//   };


//   return (
//     <FormControl className='radio-button'>
//       <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-controlled-radio-buttons-group"
//         name="controlled-radio-buttons-group"
//         value={value}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="Buyer" control={<Radio />} label="Buyer" />
//         <FormControlLabel value="Vendor" control={<Radio />} label="Vendor" />
//         <Button variant="contained" onClick={this.onSubmit}>Register</Button>

//       </RadioGroup>
//     </FormControl>
//   );
// }
// -------------------------------
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import FormPropsTextFields from './Register';

export default function BasicSelect() {
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
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
    );
}
