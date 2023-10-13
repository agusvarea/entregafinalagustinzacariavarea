import {  useEffect, useState } from "react";
import "./products.css"
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const[data, setdata] = useState([]);
  const {categoryId}=useParams()
  useEffect(() =>{
    axios("../data.json")
    .then((res)=> {
      if(categoryId){
        setdata(res.data.filter((item)=>item.category === categoryId))
      }else{
        setdata(res.data)
      }
    });
}, [categoryId]);


  return data.map((product)=>{
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card"></img>
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <Link to={'/detail/'+product.id} >Ir al detalle</Link>
        </div>
    );
  });
};

export default Products