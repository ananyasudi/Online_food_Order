import SearchAppBar_V from "./NavBar_V";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useState } from "react";

export default function Vendor(props){
    const {id}=useParams()
    const ob={
        "ID":id
    };
    
    const [user,setUser]=useState("");
    return (
        <div>
            <SearchAppBar_V obj_id={ob}></SearchAppBar_V>
            <h2>this is a vendor</h2>
        </div>
        
    );

}