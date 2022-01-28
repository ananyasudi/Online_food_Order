import axios from "axios";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useState } from "react";
import SearchAppBar from "./NavBar";

export default function Foods(props){
    const {id}=useParams();
    const ob={
        "ID":id
    }
    console.log(id);
    return(
        <div>
            <SearchAppBar obj_id={ob}></SearchAppBar>
        <h2>foods will be displayed here</h2>

        </div>
    )
}