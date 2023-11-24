import {Auth} from "../utils/Auth";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

export const CheckAuthentication  = ({children}) => {
    console.log("hello")
    const navigate = useNavigate()
    
   

useEffect(()  => {
        if (Auth.isLoggedIn()){
        return children;
    }else{
        console.log("notLoggedIn")
        navigate("/")
}}, [])
}