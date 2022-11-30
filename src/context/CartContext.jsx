import React, {useState, useContext} from "react";
const CartContext = React.createContext([]);

export const useCartContext =()=> useContext(CartContext);
export const CartProvider =({children})=>{
    const [cart, setCart]= useState([]);
    console.log('carrito: ', cart);
    const clearCart =()=>setCart([]);

    const InCart =(id)=>{
        return cart.find (product => product.id === id)? true : false;
    }

    const removeProduct =(id)=> setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, quantity) => {
		if (InCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};
    const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.Precio, 0);
	};

	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);



    return (
        <CartContext.Provider value={{
            clearCart,
            InCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;