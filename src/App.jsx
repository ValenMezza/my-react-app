import './App.css';
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/index";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
function App() {
  return(
    <>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
      <Cart></Cart>
    </>
    
  )
}

export default App;
