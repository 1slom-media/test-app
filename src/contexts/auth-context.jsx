import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const localData=localStorage.getItem('token');
    const dataStorage=localStorage.getItem("data")
    const[data,setData]=useState(JSON.parse(dataStorage))
    const [token,setToken]=useState(JSON.parse(localData));
    const[faculties,setFaculties]=useState(null)

    useEffect(()=>{
        if(token){
            return localStorage.setItem('token', JSON.stringify(token));
        }
        return localStorage.removeItem('token');
    },[token])
    useEffect(()=>{
        if(data){
            return localStorage.setItem('data', JSON.stringify(data));
        }
        return localStorage.removeItem('data');
    },[data])
    return(
       <AuthContext.Provider value={{token,setToken,data,setData,faculties,setFaculties}}>{children}</AuthContext.Provider>
    )
}