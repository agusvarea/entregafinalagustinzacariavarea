import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
        <h1 className="navbar-logo">Shop.</h1>
        <Link className="category" to='/category/nuevos ingresos'>Nuevos Ingresos</Link>
        <Link className="category" to='/category/mas vendidos'>Mas Vendidos</Link>
        <Link className="seecarrito" to={"/cart"}>🛒</Link>
        </nav>
    </div>
  )
}

export default Navbar