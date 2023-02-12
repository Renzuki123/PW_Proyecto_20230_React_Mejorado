import { useNavigate } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import LoginStyle from "./components/LoginStyle.css"

function LoginPage() {

    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "Renzo " 
            && password === "Cavero") {

            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log(dataUsuario)
            console.log(dataUsuarioJSON)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)


            navigate("/main", {
                state : {
                    username : usuario
                }
            })
        }
    }

    return <div class = "Login">
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