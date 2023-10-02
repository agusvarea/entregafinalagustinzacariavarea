import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Cartelements = () => {
  const{cart} = useContext(dataContext);
  return cart.map((Product)=>{
    return(
        <div className="cartcontent" key={Product.id}>
            <img src={Product.img} alt="product-card"/>
            <h3 className="name">{Product.name}</h3>
            <h4 className="price">{Product.price}$</h4>
        </div>
    );
  });
};

export default Cartelements