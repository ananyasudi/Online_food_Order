import axios from "axios";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { useState } from "react";

import Foods from "./Foods";
import SearchAppBar from "./NavBar";

const Buyer=(props)=>{
    const {id}=useParams()
    const ob={
        "ID":id
    };
    const [user,setUser]=useState("");
    console.log(id);


    axios
        .post(`http://localhost:4000/buyer/${id}/getU`,ob)
        .then((response)=>{
            setUser(response.data.name);
        });
    return (
        <div>
            
            <SearchAppBar   obj_id={ob}></SearchAppBar>
        <h1>Hello!!{user},Welcome back</h1>
        {/* <BrowserRouter>
        <Route path="/" element={<Navbar/>}></Route>
        </BrowserRouter>*/}
        {id} 
        </div> 
        
         
    );
}
export default Buyer;
