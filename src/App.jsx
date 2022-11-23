import './App.css';
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/index";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={      <ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={      <ItemListContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

    </>
    
  )
}

export default App;
