import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from "@mui/material/Grid";
export default function BasicSelect() {
  const [batchName, setBatchName] = React.useState('');

  const handleChange = (event) => {
    setBatchName(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className='batch'>
        <InputLabel id="demo-simple-select-label">BatchName</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={batchName}
          label="BatchName"
          onChange={handleChange}
        >
          <MenuItem value={10}>UG1</MenuItem>
          <MenuItem value={20}>UG2</MenuItem>
          <MenuItem value={30}>UG3</MenuItem>
          <MenuItem value={30}>UG4</MenuItem>
          <MenuItem value={30}>UG5</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
