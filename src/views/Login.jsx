import { createRef, useState } from 'react'
import { Link } from "react-router-dom";

import { useAuth } from '../hooks/useAuth';
import Alerta from '../components/Alerta';


export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([]);
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    });

    const hadleSubmit = async(e) =>{
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        login(datos, setErrores);

    }
    

  return (
    <>
        <h1 className="text-4xl font-black">Inicia Sesión</h1>
        <p>Para crear un pedido debes iniciar sesión</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form
                onSubmit={hadleSubmit}
                noValidate
            >
                { errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : '' }
                <div className="mb-4">
                    <label 
                        htmlFor="email"
                        className="text-slate-800"
                    >
                        Email:
                    </label>
                    <input 
                        type="email"
                        name="email"
                        ref={emailRef}
                        id="email"
                        placeholder="Tu Email"
                        className="mt-2 w-full p-3 bg-gray-100"
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="password"
                        className="text-slate-800"
                    >
                        Password:
                    </label>
                    <input 
                        type="password"
                        name="password"
                        ref={passwordRef}
                        id="password"
                        placeholder="Tu Password"
                        className="mt-2 w-full p-3 bg-gray-100"
                    />
                </div>
                <input 
                    type="submit"
                    value='Iniciar Sesión'
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />
            </form>
        </div>

        <nav className="mt-5">
          <Link to="/auth/registro">
              ¿No tienes una cuenta?, creala dando clic <span className="text-1xl font-bold">Aquí</span>
          </Link>
        </nav>
    </>
  )
}
