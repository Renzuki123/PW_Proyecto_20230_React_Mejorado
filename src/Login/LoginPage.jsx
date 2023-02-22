import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './LoginStyle.css';


function LoginPage() {
  const navigate = useNavigate();

  const onLoginOk = function (usuario, password) {
    fetch('http://127.0.0.1:8000/endpoints/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: usuario,
        password: password,
      }),
    })

      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error en la respuesta del servidor');
        }
      })
      .then((data) => {
        if (data.error === '') {
          const dataUsuario = {
            username: usuario,
            password: password,
          };

          // JSON.stringify : convierte objetos js a JSON (string)
          const dataUsuarioJSON = JSON.stringify(dataUsuario);
          console.log(dataUsuario);
          console.log(dataUsuarioJSON);
          // Guardado en session storage
          sessionStorage.setItem('DATA_USUARIO', dataUsuarioJSON);

          // Redirigir al usuario a otra página
          navigate('/Req2');
        } else {
          throw new Error(data.error);
        }
      })
      .catch((error) => {
        console.error(error);
        // Mostrar mensaje de error al usuario
        alert('INICIO DE SESIÓN FALLIDO');
      });
  };

  const onLoginNotOk = function () {
    alert('SOLICITUD NO ES DE TIPO POST');
  };

  return (
    <div class="Login">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <LoginForm onLoginOk={onLoginOk} onLoginNotOk={onLoginNotOk} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
export default LoginPage;

