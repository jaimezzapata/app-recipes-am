import { useState, useEffect } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
let urlUsuarios = 'http://localhost:3000/users'

const Register = () => {

  const [stateName, setStateName] = useState('')
  const [stateUser, setStateUser] = useState('')
  const [statePassword, setStatePassword] = useState('')
  const [stateEmail, setStateEmail] = useState('')
  const [statePhone, setStatePhone] = useState('')
  const [stateUsters, setStateUsers] = useState([])

  function getUsers() {
    fetch(urlUsuarios)
      .then(response => response.json())
      .then(json => setStateUsers(json))
  }
  useEffect(() => {
    getUsers()
  }, [])

  function buscarUsuario() {
    let auth = stateUsters.some((item) => stateUser == item.user && stateEmail == item.email)
    console.log(auth)
    return auth
  }

  function createUser() {
    let newUser = {
      user: stateUser,
      email: stateEmail,
      name: stateName,
      password: statePassword,
      phone: statePhone
    }
    fetch(urlUsuarios, {
      method: 'POST',
      body: JSON.stringify(newUser)
    })
      .then()
      .then()
  }

  function registerUser() {
    console.log('Registrando usuario')
  }

  return (
    <form className='registerForm'>
      <input onChange={(e) => { setStateName(e.target.value) }} placeholder='Name' type="text" />
      <input onChange={(e) => { setStateUser(e.target.value) }} placeholder="User" type="text" />
      <input onChange={(e) => { setStatePassword(e.target.value) }} placeholder="Password" type="text" />
      <input onChange={(e) => { setStateEmail(e.target.value) }} placeholder="Email" type="text" />
      <input onChange={(e) => { setStatePhone(e.target.value) }} placeholder="Phone" type="text" />
      <input onClick={registerUser} type="button" value="Register" />
      <Link to='/login'>¿Ya tiene una cuenta?</Link>
    </form>
  )
}

export default Register