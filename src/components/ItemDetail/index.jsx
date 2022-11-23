import "./ItemDetail.css"
import ItemCount from "../ItemCount";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);

    const onAdd =()=>{
        setGoToCart(true);
    }
    return (
        <>
            <div className="container">
                <div className="detail">
                    <img className="detail-image" src={data.img} alt="" />
                    <div className="content">
                        <h1>{data.product}</h1>
                        <div className="content-price">
                            <h3>Precio: </h3>
                            <p>${data.Precio}</p>
                        </div>
                        <div className="content-detail">
                            <h4>Detalles:</h4>
                            <p>{data.detalles}</p>
                            <h4>Características:</h4>
                            <p>{data.capacidad}</p>
                        </div>
                        <div>
                        {
                            goToCart
                                ? <Link to='/Cart'>Terminar compra</Link>
                                : <ItemCount onAdd={onAdd} initial={0} stock={data.stock}></ItemCount>
                        }                            
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail; 