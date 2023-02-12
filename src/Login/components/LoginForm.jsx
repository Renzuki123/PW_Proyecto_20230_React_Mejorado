import { useState } from "react"

function LoginForm(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function () {
        console.log("Usuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }

    return <form>
        <div className="LoginBox">
            <div>
                <label className="form-label">Usuario:</label>
                <input className="form-control" type="text"
                    value={usuario}
                    onChange={function (evt) { setUsuario(evt.target.value) }} />
            </div>

            <div>
                <label className="form-label">Contraseña:</label>
                <input className="form-control" type="password"
                    value={password}
                    onChange={function (evt) { setPassword(evt.target.value) }} />
            </div>

            <div id="container-bt">
                <button type="button" class="btn btn-lg btn-block mt-3  mb-3"
                    onClick={butOnClick}>
                    Login
                </button>
            </div>

            <div>
                <a href="#">¿Olvidaste tu contraseña?   </a>
                <a href="#">Registrate   </a>
            </div>

        </div>
    </form>
}

export default LoginForm