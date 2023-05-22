import { Link } from "react-router-dom";

import { useAuthStore, useForm } from "../../../hooks/";

import '../../styles/Auth.css';
import { AuthLayout } from "../../../layouts/AuthLayout";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        startLogin({email, password});
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [errorMessage]);
    
    return (
        <AuthLayout>
            <h3 className="auth__title">Sign In</h3>

            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={handleLogin}
            >

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary my-5 w-100"
                >
                    Login
                </button>

                <Link 
                    to="/auth/register"
                >
                    Create new account
                </Link>
            </form>
        </AuthLayout>
    )
}