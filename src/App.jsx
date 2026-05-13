import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarRB from "./components/NavbarRB"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {
  
console.log('App')

  return (
    <BrowserRouter>
    <NavbarRB/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>}/>
      <Route path='/category/:type' element={<ItemListContainer saludo='Categoria'/>}/>
      <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
