import { useCartContext } from "../../context/CartContext";
import React from "react";
import './ItemCart.css'

const ItemCart = ({product})=>{
    const {removeProduct}=useCartContext()
    return(
        <div className="itemcart">
            <img src={product.img} alt={product.product} />
            <div className="itemcart-info">
                <h4>{product.product}</h4>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: ${product.Precio}</p>
                <h5>Subtotal: ${product.quantity * product.Precio}</h5>
                <button className="css-button-3d--black" onClick={()=>removeProduct(product.id)}>Eliminar</button>
                
            </div>
        </div>
    )
}
export default ItemCart;