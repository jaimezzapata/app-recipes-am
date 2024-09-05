import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <form className='registerForm'>
        <input placeholder="User" type="text" />
        <input placeholder="Password" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Phone" type="text" />
        <input type="button" value="Register" />
        <Link to='/login'>¿Ya tiene una cuenta?</Link>
    </form>
  )
}

export default Register