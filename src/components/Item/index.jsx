import "../Item/item.css"
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";


export const Item = ({ info }) => {
    // const nombre = useContext(CartContext);
    // console.log(CartContext);
    return (
        <>
            <div className="card">
                <Link to={`/detalle/${info.id}`}>
                    <div className="card-item">

                        <img src={info.img} alt="" />
                        <h4>{info.product}</h4>
                        <button>${info.Precio}</button>


                    </div>
                </Link>
            </div>


        </>
    )
}
export default Item;