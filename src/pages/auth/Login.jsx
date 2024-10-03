import './Login.css'
import { users } from '../../data/dataUsers';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
  const [stateUser, setStateUser] = useState('')
  const [statePassword, setStatePassword] = useState('')
  console.log(stateUser)
  console.log(users)
  let redireccion = useNavigate()
  function iniciarSesion() {
    if (buscarUsuario()) {
      // setTimeout(() => {
      redireccion('/dashboard')
      // }, 2000)
    } else {
      console.log('Credenciales incorrectas')
    }
  }
  function buscarUsuario() {
    let auth = users.some((item) => stateUser == item.user)
    console.log(auth)
    return auth
  }



  return (
    <form className="loginForm" action="">
      <input onChange={(e) => { setStateUser(e.target.value) }} placeholder="User" />
      <input onChange={(e) => { setStatePassword(e.target.value) }} placeholder="Password" />
      <input onClick={iniciarSesion} type="button" value="Login" />
      <Link to='/register'>¿No tiene una cuenta?</Link>
    </form>
  );
};


export default Login;
