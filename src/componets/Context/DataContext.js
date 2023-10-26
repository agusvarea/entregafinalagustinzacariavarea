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
const dataProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const buyProducts = (product) => {
      const productrepeat = cart.find((item) => item.id === product.id);
  
      if (productrepeat) {
        setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productrepeat.quanty + 1 } : item)));
      } else {
        setCart([...cart, product]);
      }
    };
  
    return <dataContext.Provider value={{ cart, setCart, buyProducts }}>{children}</dataContext.Provider>;
  };
export default DataProvider;