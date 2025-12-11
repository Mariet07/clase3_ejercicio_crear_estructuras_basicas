import React from 'react' // atajo rfce (de la extensión instalada de talento tech)

function ListaUsuarios({equipo}) {
    // const usuarios = ['Silvia', 'Luis', 'Matías', 'Sabrina'] //lista, arreglo o array - con crtl+k+c comento una línea y descomento con crtl+k+u
    /* con alt + shit + a hago un comentario de más de una línea */
  return (
    <> 
    <div>ListaUsuarios</div>
    <ul> 
        {equipo.map(persona => ( //metodo .map para renderizar el array, su usa el nombre de la variable.map, si está creada en plural en el .map la lamo en singular
        <li key={persona.id}>
        <b>{persona.nombre}</b>: {persona.tecnologia}
        </li> // key es un atributo, se usa para q renderice cada elemento del arreglo
        ))}

    </ul>
    </>
  )
}

export default ListaUsuarios