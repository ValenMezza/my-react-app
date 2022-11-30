import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import './Cart.css'

const Cart = () => {
	const { cart, totalPrice } = useCartContext();


	const order={
		buyer:{
			name:'Valentino',
			lastname: 'Mezzavilla',
			email: 'valentinomezza0511@icloud.com',
			addres: 'Av. Siempreviva'
		},
		items: cart.map(product=>({id: product.id, title: product.product, Precio: product.Precio, Cantidad: product.quantity})),
		total: totalPrice(),
	}


	const handleClick=()=>{
		const db =getFirestore();
		const ordersCollection = collection (db, 'orders');
		addDoc (ordersCollection, order)
		.then(({id})=>console.log(id))
	}






	if (cart.length === 0) {
		return (
			<>
				<p>No hay elementos en el carrito</p>
				<Link to='/'>Hacer compras</Link>
			</>
		)
	}
	return (
		<>
			<div className="Cart-Products">
				<div >
					{cart.map((product) => (
						<>
							<div className="each-product" >
								<ItemCart key={product.id} product={product} />
							</div>

						</>

					))}
					<p className="preciofinal">Total: ${totalPrice()}</p>
					<button onClick={handleClick}>Finalizar compra</button>
				</div>

			</div>

		</>
	);
}
export default Cart;