import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import "./products.css"
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const[data, setdata] = useState([]);
  const {categoryId}=useParams();
  const { buyProducts } = useContext(dataContext);
  useEffect(() =>{
    axios("data.json").then((res) => setData(res.data));
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
            <button onClick={() => buyProducts(product)}>buy</button>
            <Link to={'/detail/'+product.id} >Ir al detalle</Link>
        </div>
    );
  });
};

export default Products