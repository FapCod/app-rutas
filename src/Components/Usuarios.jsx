import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Usuarios = () => {
    const [usuario,setUsuarios]=useState([])
    const obtenerUsuarios=async()=>{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usuarios= await respuesta.data
        setUsuarios(usuarios)
    }
    useEffect(()=>{
        obtenerUsuarios()
    },[])


    return (
        <div>
            <h2>Lista de usuarios</h2>
            {
                usuario.map((item)=>(
                    <div>
                    <Link to={`/usuario/${item.id}`}>{item.name}</Link> 
                    </div>
                ))
            }
        </div>
    )
}

export default Usuarios
