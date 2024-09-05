import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Home from '../pages/Home'
import ErrorNotFound from '../pages/ErrorNotFound'
import Dashboard from '../pages/Dashboard'
import { Children } from 'react'
import Vegetarian from '../pages/recipes/Vegetarian'
import NonVegetarian from '../pages/recipes/NonVegetarian'

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
    },
    {
        path: '/dashboard/',
        element: <Dashboard />,
        children: [
            {
                path: 'vegetarian',
                element: <Vegetarian />
            },
            {
                path: 'non-vegetarian',
                element: <NonVegetarian />
            },
        ]
    }
]