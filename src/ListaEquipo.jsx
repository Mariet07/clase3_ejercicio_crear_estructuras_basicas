import React from 'react' //usar el atajo rfce para traer la estructura de import function

function ListaEquipo({equipo}) {
    return (
        <>
        <h2>Equipo de TalentoLab</h2>
        <ul>
            {equipo.map(persona => (
                <li key={persona.id}>
                    <b>{persona.nombre}</b>: {persona.tecnologia}
                </li>
            ))}
        </ul>
        </>
    );
} export default ListaEquipo

