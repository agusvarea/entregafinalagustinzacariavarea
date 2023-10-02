import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Carttotal = () => {
  const{cart} = useContext(dataContext);

  const total = cart.reduce((acc, el)=> acc + el.price, 0);
  return (
    <div className="carttotal">
     <h3>total a pagar: {total} $</h3>
    </div>
  );
};

export default Carttotal