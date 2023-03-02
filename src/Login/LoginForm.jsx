import { useState } from "react"

function LoginForm(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }

    return <form>
        <div>
            <label className="form-label">Usuario:</label>
            <input className="form-control" type="text"
                value={ usuario }
                onChange={ function(evt) { setUsuario(evt.target.value) } } />
        </div>
        <div>
            <label className="form-label">Password:</label>
            <input className="form-control" type="password"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } } />
        </div>
        <button className="btn btn-success mt-2" type="button"
            onClick={ butOnClick }>
            Login
        </button>
    </form>
}

export default LoginForm