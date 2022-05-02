import { Link } from "react-router-dom";
import React from "react";

export const Navbar=()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>

        <Link to="/logout">Logout</Link>

        <Link to="/neworder">NewOrder</Link>

        <Link to="/order">Order</Link>

        </>
    )
}