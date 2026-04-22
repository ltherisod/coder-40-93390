import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
const CartWidgetRI = ()=> {
    return(
        <div>
            <TiShoppingCart fontSize={'1.5rem'} />
            <Badge bg='danger'>15</Badge>
        </div>
    )
}
export default CartWidgetRI