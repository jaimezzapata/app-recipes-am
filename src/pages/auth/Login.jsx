import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <form className="loginForm" action="">
      <input placeholder="User" />
      <input placeholder="Password" />
      <input type="button" value="Login" />
      <Link to='/register'>¿No tiene una cuenta?</Link>
    </form>
  );
};

export default Login;
