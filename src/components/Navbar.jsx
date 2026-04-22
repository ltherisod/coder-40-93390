//import del css
import "../css/Navbar.css"
//import el componente
import CartWidget from "./CartWidget"

//IMPORTO LA IMG DE SRC
import reactImg from "../assets/react.svg"

const Navbar = (props) => {
//logica
    return(
        <nav className='nav-container'>
            <a href="" className="anchor-nav">
                {/* IMAGEN EN PUBLIC NO SE IMPORTAN Y NO SE MENCIONAR PUBLIC EN LA DIRECCION DEL ARCHIVO */}
                <img alt='logo' src='../logo-shop.png' className="logo"/>
                {/* LAS IMG EN SRC LAS COLOCAMOS CON JS {NOMBRE DEL IMPORT} */}
                {/* <img alt='logo' src={reactImg} className="logo"/> */}
            </a>
            <a href="" className="anchor-nav">Nuevos</a>
            <a href="" className="anchor-nav">Ofertas</a>
            <a href="" className="anchor-nav">Mas Vendidos</a>
            <CartWidget compra={15} cart={props.cart}/>
        </nav>
    )

}

export default Navbar