import { style } from "@mui/system";
import React from "react";
import './profile_edit.css';

export default ({ placeholder, type, value, handleInput, name, read_val ,label_}) => {

  return (
    <div>
    <label>{label_}:&nbsp;
    <input readOnly={read_val}  className="field" style={{alignItems:"center"}}
      type={type}
      name={name}
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
    />
    </label>
    </div>
  )
};
