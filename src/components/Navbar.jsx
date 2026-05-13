//import del css
import "../css/Navbar.css"
//import el componente
import CartWidget from "./CartWidget"

//IMPORTO LA IMG DE SRC
import reactImg from "../assets/react.svg"
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
//logica
    return(
        <nav className='nav-container'>
            <NavLink to="/" className="anchor-nav">
                {/* IMAGEN EN PUBLIC NO SE IMPORTAN Y NO SE MENCIONAR PUBLIC EN LA DIRECCION DEL ARCHIVO */}
                <img alt='logo' src='../logo-shop.png' className="logo"/>
                {/* LAS IMG EN SRC LAS COLOCAMOS CON JS {NOMBRE DEL IMPORT} */}
                {/* <img alt='logo' src={reactImg} className="logo"/> */}
            </NavLink>
            <NavLink to="/category/nuevos" className="anchor-nav">Nuevos</NavLink>
            <NavLink to="/category/ofertas" className="anchor-nav">Ofertas</NavLink>
            <NavLink to="/category/mas vendidos" className="anchor-nav">Mas Vendidos</NavLink>
            <CartWidget compra={15} cart={props.cart}/>
        </nav>
    )

}

export default Navbar