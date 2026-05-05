import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer"
import NavbarRB from "./components/NavbarRB"
import ItemCount from './components/ItemCount';
function App() {
  
console.log('App')

  return (
    <>
    <NavbarRB/>
    <ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>
    <ItemCount/>
    </>
  )
}

export default App
