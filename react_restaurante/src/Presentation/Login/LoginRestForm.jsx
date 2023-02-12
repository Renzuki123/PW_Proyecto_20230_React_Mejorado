import { useState } from "react"
import "./LoginRestForm.css"
import imageLogo from "./imageLogo.png";

function LoginRestForm(props){

    const [user,setUser] = useState("")
    const [password,setPassword] = useState("") 
    //Con estas variables de estado vamos a almacenar los valores del login, pero para eso también
    //Necesito poner una función que asigne esos valores de escritura a las funciones setUser y setPassword
    //onChange={function(event){setUser(event.target.value)} -> esto va dentro del input

    const butOnClick= function(){
        //con esta función se imprime en consola cuando el usuario ingrese sus datos 
        console.log(user)
        console.log(password)
        props.onLoginOk(user,password) // se pasa como props esta función del padre LoginPage, para que me redirija al main

    }
        

    return <form className="form1">
        
        <div>
        <img className="imagenlogo" src={imageLogo} alt="logo" />
        <br></br>
            <label className="form-label">Usuario:</label>
            
            <input className="form-control" type="text" 
            value={user} onChange={function(event){setUser(event.target.value)}} ></input>
        </div>    {/*Con esta función asignamos la escritura a la variable de estado user*/}
        <br></br>
        <div>
            <label className="form-label" >Contraseña:</label>
            <input className="form-control" type="password" 
             value={password} onChange={function(event){setPassword(event.target.value)}} ></input>
                    {/*Con esta función asignamos la escritura a la variable de estado password  */}
        </div>

        <div>
        <button className="btn btn-success mt-2"
         type="button" onClick= {butOnClick}>Login</button> {/*con el mt-2_ margin-top 2, se hace espacio */}
                      {/**Al hacer click se imprime en consola los datos correspondientes al user y password */}
                      {/*Hace una regeneración de componentes de las variables de estado */}
        </div>          
    </form>
}

export default LoginRestForm