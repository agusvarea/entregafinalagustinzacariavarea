import "./navbar.css";
import { Link } from "react-router-dom";
import TotalItems from '../CartContent/TotalItems'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
const Navbar = () => {
  const {cart}= useContext(dataContext)
  return (
    <div className="nav-container">
        <nav className="navbar">
        <h1 className="navbar-logo">Shop.</h1>
        <Link className="category" to='/category/nuevos ingresos'>Nuevos Ingresos</Link>
        <Link className="category" to='/category/mas vendidos'>Mas Vendidos</Link>
        <Link className="seecarrito" to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
        </nav>
    </div>
  )
}


export default Navbar