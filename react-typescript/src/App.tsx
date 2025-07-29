import { UseStateContador } from "./components/UseStateContador";
import { Arreglo } from "./tipescript/Arreglo";
import { ArregloDos } from "./tipescript/ArregloDos";
import { Funciones } from "./tipescript/Funciones";
import { Promedios } from "./tipescript/Promedios";


//Componente padre - funciones
const App = () =>{
  return(
    <div>
    <h1>Ejercicios</h1>
    <hr/>
    <Funciones/>
    <hr/>
    <Arreglo/>
    <hr/>
    <ArregloDos/>
    <hr/>
    <Promedios/>
    <hr/>
    <UseStateContador/>
    </div>
  )
}

export default App;