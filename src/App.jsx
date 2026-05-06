import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer"
import NavbarRB from "./components/NavbarRB"
import FetchContainer from './examples/FetchContainer';
import { withLogging } from './hocs/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  
console.log('App')
const ItemListHoc= withLogging(ItemListContainer)
  return (
    <>
    <NavbarRB/>
    {/* <FetchContainer/> */}
    {/* <ItemListHoc saludo='Bienvenidos a mi App' alumno='Camila'/> */}
    <ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>
    <ItemDetailContainer/>
   
    </>
  )
}

export default App
