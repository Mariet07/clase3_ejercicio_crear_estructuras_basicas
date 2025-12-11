import React from "react";
import ListaEquipo from "./ListaEquipo"; //importa el componente ListaUsuarios
//import Header from "./components/Header";
//import './estilos/estilos.css' // se vuelve global y aplica sobre los componentes

function App() {
// array de objetos:
        const equipo = [
  { id: 1, nombre: 'Silvia', tecnologia: 'Product Owner' },
  { id: 2, nombre: 'Luis', tecnologia: 'Diseñador UX UI' },
  { id: 3, nombre: 'Matías', tecnologia: 'Desarrollador' },   
  { id: 4, nombre: 'Sabrina', tecnologia: 'Desarrolladora' }
];

  return ( 
    // invoco al componente ListaUsuario
    <>
    <h1>React</h1>
    <hr></hr>
    <ListaEquipo equipo={equipo}/> 
    </>
  );
} export default App;
