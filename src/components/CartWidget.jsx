const CartWidget = (props)=> {
    return(
        <div>
            <span>🛒</span>
            <span style={{color:"red"}}>{props.compra}</span>
        </div>
    )
}
export default CartWidget