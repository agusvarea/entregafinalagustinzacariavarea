import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ Children }) => {
    const[data, setdata] = useState([]);
    useEffect(() =>{
        axios("data.json").then((res)=> setdata(res.data));
    },[])
    return <dataContext.Provider value={{data}}>{Children}</dataContext.Provider>;
};

export default DataProvider;