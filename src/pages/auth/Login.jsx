import './Login.css'
import { users } from '../../data/dataUsers';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  console.log(users)
  let redireccion = useNavigate()
  function iniciarSesion() {
    if (users[0].user == 'admin') {
      setTimeout(() => {
        redireccion('/dashboard')
      }, 2000)
    } else {
      console.log('Credenciales incorrectas')
    }
  }
  return (
    <form className="loginForm" action="">
      <input placeholder="User" />
      <input placeholder="Password" />
      <input onClick={iniciarSesion} type="button" value="Login" />
      <Link to='/register'>¿No tiene una cuenta?</Link>
    </form>
  );
};


export default Login;
