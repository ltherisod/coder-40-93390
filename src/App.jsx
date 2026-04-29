import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT DE COMPONENTES
//import + Nombre del componente + from + direccion del archivo
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer"
import NavbarRB from "./components/NavbarRB"
import DinamicComponent from './examples/DinamicComponent';
import ComponentWithChildren from './examples/ComponentWithChildren';
import ItemCount from './components/ItemCount';
function App() {
  
console.log('App')

  return (
    <>
    <NavbarRB/>
    {/* <ComponentWithChildren/>
     <ComponentWithChildren>
     <DinamicComponent
     title='Miren soy una children' 
     description='sarasa sarasa srasa'
      buttonText='Go!'
       img='https://i.postimg.cc/Y2JPJ0TM/success.png'
       color='primary'/>
    </ComponentWithChildren>
    <ComponentWithChildren>
      Hola miren que linda children
    </ComponentWithChildren>
    <ComponentWithChildren>
     <p>Miren soy una children</p>
     <input placeholder='Yo tambien'/>
    </ComponentWithChildren>
    <DinamicComponent
     title='This is fine' 
     description='sarasa sarasa srasa'
      buttonText='Comprar'
       img='https://i.postimg.cc/9MqqkQP9/whatdoyoumeme-Deco3.png'
       color='success'/>
       <DinamicComponent
     title='Amsiedad' 
     description='sarasa sarasa srasa'
      buttonText='Shop'
       img='https://i.postimg.cc/B6DXgwsc/whatdoyoumeme-Deco1.png'
       color='dark'/> */}
    <ItemListContainer saludo='Bienvenidos a mi App' alumno='Camila'/>
    <ItemCount/>
    </>
  )
}

export default App
