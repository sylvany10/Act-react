import React from 'react'

export const ArregloDos = () => {
    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const divididoPorCinco: number[] = arreglo.map(num => num / 5);


    return (
        <div>
            <h3>ArregloDos</h3>
        <span>Arreglo original: {arreglo.join(',')}</span>
        <br/>
        <span>Arreglo divido para cinco: {divididoPorCinco.join(',')}</span>
        </div>
    )
}
