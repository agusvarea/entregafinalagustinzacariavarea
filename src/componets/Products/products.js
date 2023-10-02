import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./products.css"

const Products = () => {
  const {data, cart, setcart} = useContext(dataContext);
  const buyproducts = (product) =>{
    setcart([...cart, product])
  }

  return data.map((product)=>{
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card"></img>
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button onClick={()=> buyproducts(product)}>Comprar</button>
        </div>
    );
  });
};

export default Products