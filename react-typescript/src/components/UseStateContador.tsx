import { useState } from "react"


export const UseStateContador = () => {

    //hook state: Cambiar el estado de un componente o de un valor
    const [valorContador, setValorContador] = useState<number>(0);

    //función cambiar el estado del valor del contador
    const cambiarContador = (numero: number) => {
        //llamar función del hook useState
        setValorContador(valorContador + numero)
    }

  return (
    <div>
        <h3>Acumulador: <small>{valorContador}</small></h3>
        <button className='btn btn-primary'
        onClick={()=> cambiarContador(5)}
        >+5</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-primary'
        onClick={()=> cambiarContador(-5)}
        >-5</button>

    </div>
  )
}
