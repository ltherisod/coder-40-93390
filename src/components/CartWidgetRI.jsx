import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidgetRI = ()=> {
    const {cart, totalQty}= useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <TiShoppingCart fontSize={'1.5rem'} />
           {cart.length > 0 && <Badge bg='danger'>{totalQty()}</Badge>}
        </div>
    )
}
export default CartWidgetRI