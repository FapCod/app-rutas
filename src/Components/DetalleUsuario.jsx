import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const DetalleUsuario = () => {
    const [usuario,setUsuario]=useState([])
    //creado para la solucion
    const [dato,setDato]=useState([])
    const [geo,setGeo]= useState([])
    //terminado
    const {id}= useParams()
    const obtenerUsuario=async()=>{
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const usuario= await respuesta.data
        setUsuario(usuario)
        setDato(usuario.address)
        setGeo(usuario.address.geo)
    }
    useEffect(()=>{
        obtenerUsuario()
    },[])
    return (
        <div>
           <h2>Detalle del usuario</h2>
           Nombre: {usuario.name} <br/>
           Email: {usuario.email} <br/>
           Direccion <br/>
           Ciudad: {dato.city} <br/>
           Calle: {dato.street} <br/>
           Suite: {dato.suite} <br/>
           Codigo: {dato.zipcode} <br/>
           Geolocalizacion <br/>
           Latitud: {geo.lat} <br/>
           Longitud: {geo.lng}
        </div>
    )
}

export default DetalleUsuario
