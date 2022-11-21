import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

export const useAuth=()=>{
    const {token,setToken,data,setData,faculties,setFaculties}=useContext(AuthContext);
    
    
    return {token,setToken,data,setData,faculties,setFaculties};
}