import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header className="encabezado">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </header>
    )
}

export default Header