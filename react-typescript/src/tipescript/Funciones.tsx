import React from 'react'

export const Funciones = () => {
    const areaCuadrado = (lado: number): number => {
        return lado * lado;
    }
    
    return (
        <div>
            <h3>Funciones</h3>
            <span>El área de un cuadro es: {areaCuadrado(8)}</span>
        </div>
    )
    
}
