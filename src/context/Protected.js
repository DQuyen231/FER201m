import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

export default function Protected({Children}){
    const {user} = UserAuth();

    if(!user){
        return <Navigate to='/loginpage'/>
    }
    return Children;
}