import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarRB from "./components/NavbarRB"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
//3. IMPORTAMOS EL PROVEEDOR PARA DAR ACCESO AL CONTEXTO
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {
  
console.log('App')

  return (
    <BrowserRouter>
    <CartProvider>
    <NavbarRB/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>}/>
      <Route path='/category/:type' element={<ItemListContainer saludo='Categoria '/>}/>
      <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
       <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
