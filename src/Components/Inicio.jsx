import React from 'react'
import {useParams} from 'react-router-dom'
 const Inicio = () => {
    //las variables seran segun los paremetros que lleguen desde la app.jsx 
    const {nombre,apellido,edad}= useParams()
    return (
        <div>
            <h2>Inicio</h2>
            mi nombre es:{nombre} <br/>
            mi apellido es: {apellido} <br/>
            mi edad es: {edad} <br/>
        </div>
    )
}

export default Inicio