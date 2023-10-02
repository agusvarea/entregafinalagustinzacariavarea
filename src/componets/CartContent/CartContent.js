import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import Cartelements from "./cartelements"
import Carttotal from "./carttotal";
import "./cartcontent.css";
const CartContent = () => {
  const{cart} = useContext(dataContext);

  return cart.length > 0 ? (
    <>
     <Cartelements />
     <Carttotal />
    </>
  ): (
    <h2 className="cart-message-center"> tu carrito esta vacio </h2>
  )
};

export default CartContent