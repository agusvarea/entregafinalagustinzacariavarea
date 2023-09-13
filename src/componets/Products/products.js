import { UseContext } from "react";
import { dataContext } from "../Context/DataContext";

const products = () => {
  const {data} = UseContext(dataContext);
  return data.map((product)=>{
    return (
        <div className="card">
            <img src={product.img} alt="img-product-card"></img>
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button>Comprar</button>
        </div>
    )
  })
}

export default products