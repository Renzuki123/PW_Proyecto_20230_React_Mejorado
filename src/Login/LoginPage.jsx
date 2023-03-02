import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './LoginStyle.css';

function LoginPage() {

    const navigate = useNavigate()

    const loginHttp = async function(usuario, password) {
        // 1. Peticion HTTP POST -> /endpoints/login
        const response = await fetch(
            "http://localhost:8000/endpoints/login",
            {
                method : "POST",
                body : JSON.stringify(
                    { 
                        usuario : usuario, 
                        password : password 
                    }
                )
            }
        )
        const data = await response.json()

        return data.error
    }

    const onLoginOk = async function(
        usuario, password
    ) {
        const error = await loginHttp(usuario, password)
        if (error === "") {
            // Login correcto
            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/20230_2-hola-react/main", {
                state : {
                    username : usuario
                }
            })
        }else {
            console.error(error)
        }
    }

    return <div className="container">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <LoginForm 
                    onLoginOk={ onLoginOk } />
            </div>
            <div className="col"></div>
        </div>
    </div>
}

export default LoginPage

