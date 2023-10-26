import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import "./products.css"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebase";

const Products = () => {
  const[data, setData] = useState([]);
  const {categoryId}=useParams();
  const { buyProducts } = useContext(dataContext);
useEffect(() =>{
    axios("data.json").then((res) => setData(res.data));
    axios("../data.json")
    .then((res)=> {
      if(categoryId){
        setData(res.data.filter((item)=>item.category === categoryId))
      }else{
        setData(res.data)
      }
    });
}, [categoryId]);

//useEffect(()=>{
//  const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)):collection(db, "productos")
//  getDocs(coleccionProductos)
//  .then((res)=> {
//    const list = res.docs.map((product)=>{
//      return{
//        id:product.id,
//        ...product.data()
//      }
//    })
//    setData(list)
//  })
//  .catch((error)=> console.log(error))
//},[categoryId])

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