import {  useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ItemDetailcontainer.css"
import { collection, doc, getDoc} from "firebase/firestore"
import { db } from "../../services/firebase";


const ItemDetailContainer = () => {
  const[data, setdata] = useState({});
  const {id}=useParams()

    //useEffect(() =>{
    //axios("../data.json")
    //.then((res)=> setdata(res.data.find((item)=> item.id === parseInt(id))))
    //}, [id]);
    useEffect(()=>{
      const collectionprod = collection(db, "productos")
      const referenciaAlDoc = doc(collectionprod, id)
      getDoc(referenciaAlDoc)
      .then((res)=> setdata({id:res.id, ...res.data()}))
      .catch((error)=> console.log(error))
    } ,[])

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