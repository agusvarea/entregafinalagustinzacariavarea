import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const[data, setdata] = useState([]);
    const[cart, setcart] = useState([]);

    useEffect(() =>{
        axios("data.json").then((res)=> setdata(res.data));
    }, []);
    return <dataContext.Provider value={{data, cart, setcart}}>{children}</dataContext.Provider>;
};

export default DataProvider;