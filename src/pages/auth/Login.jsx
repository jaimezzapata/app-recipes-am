import './Login.css'

const Login = () => {
  return (
    <form className="loginForm" action="">
      <input placeholder="User" />
      <input placeholder="Password" />
      <input type="button" value="Login" />
    </form>
  );
};

export default Login;
