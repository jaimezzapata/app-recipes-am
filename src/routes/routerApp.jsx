import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Home from '../pages/Home'
import ErrorNotFound from '../pages/ErrorNotFound'

export let routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorNotFound />
    }
]