import React,{useState,useEffect} from 'react'

const Login = () => {

    const [nombre,setNombre]=useState('Frank')
    // Se ejecuta automaticamente sin llamarlo
    //useEffect se aplica cuando todo se haya renderizado en la pagina web
    useEffect(() =>{
        setTimeout(()=>{
            setNombre('Antonio')
        },2000)

    })



    return (
        <div>
           <h2> Login</h2>
            {nombre}
        </div>
    )
}
export default Login