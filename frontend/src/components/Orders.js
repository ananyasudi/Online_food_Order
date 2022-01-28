import axios from "axios";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useState } from "react";
import SearchAppBar from "./NavBar";
export default function Orders(){
    const { id } = useParams();
    const ob = {
        "ID": id
    }
    return (
        <div>
            <SearchAppBar obj_id={ob}></SearchAppBar>

            <h2>orders will be displayed here</h2>

        </div>

    )
}