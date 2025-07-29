import React from 'react'
interface Alumnos{
    nombre: string;
    edad: number;
    calificacion: number;
}
export const Promedios = () => {
        const alumnos: Alumnos[] = [
        {
            nombre: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            nombre: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            nombre: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];
    const calcularPromedio = (): number => {
        const total = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
        return total / alumnos.length;
    };

  return (
    <div>
        <h3>Promedios</h3>
        <br/>
        <span>El promedio es: {calcularPromedio()}</span>
    </div>
  )
}
