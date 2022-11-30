import './App.css';
import React from 'react';
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/index";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
// export const CartContext = React.createContext([]);
// console.log('CartContext: ', CartContext);

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>

    </>

  )
}

export default App;
