import React from 'react'

export const Arreglo = () => {
      const sumaElementos = (numeros: number[]): number => {
    return numeros.reduce((acum, valor) => acum + valor, 0);
  };

    const numeros: number[] =[10,20,30,40,50];

  return (
    <div>
        <h3>Arreglo</h3>
        <span>La suma de los números es: {sumaElementos(numeros)}</span>

    </div>
  )
}
