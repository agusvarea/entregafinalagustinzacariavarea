import {  useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const[data, setdata] = useState({});
  const {id}=useParams()

    useEffect(() =>{
    axios("../data.json")
    .then((res)=> setdata(res.data.find((item)=> item.id === parseInt(id))))
    
}, [id]);


  console.log(data)
    return (
        <div className="card">
            <img src={data.img} alt="img-product-card"></img>
            <h3>{data.name}</h3>
            <h4>{data.price}$</h4>
        </div>
    );
  
};

export default ItemDetailContainer