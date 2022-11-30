import React from "react";
import { useCartContext } from "../../context/CartContext";
export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <>
            <div><i className="bi bi-cart"></i></div>
            <span> {totalProducts() || '0'}</span>
        </>

    )
}