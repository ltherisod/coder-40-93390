import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT DE COMPONENTES
//import + Nombre del componente + from + direccion del archivo
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer"
import NavbarRB from "./components/NavbarRB"
function App() {
  // const data={
  //   saludo:'Bienvenidos a mi app',
  //   alumno:'Camila'
  // }


  return (
    <>
    <NavbarRB/>
    <ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>
      <h1 className='text-warning'>Hola chicos</h1>
    </>
  )
}

export default App
