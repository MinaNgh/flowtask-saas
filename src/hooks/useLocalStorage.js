//custom React hook
import { useState, useEffect } from "react";
function useLocalStorage(key, initialValue){
    const[value,setValue] = useState(()=>{
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    useEffect(()=>{
        //localStorage only stores string
        localStorage.setItem(key,JSON.stringify(value))
    },[value, key]);

    return [value,setValue];

}
export default useLocalStorage;