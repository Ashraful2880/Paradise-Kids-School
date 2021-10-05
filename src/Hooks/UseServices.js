import { useEffect } from "react";
import { useState } from "react"

const useServices=()=>{
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('../services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    return [service]
}

export default useServices;