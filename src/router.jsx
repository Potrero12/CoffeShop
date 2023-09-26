import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import AuthLayout from './layout/AuthLayout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';

// definir las rutas como arreglos
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registro',
                element: <Registro />
            },
        ]
    },

]);

export default router;