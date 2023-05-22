import { Link } from "react-router-dom";

import { useAuthStore, useForm } from "../../../hooks/";
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";

import '../../styles/Auth.css';
import { AuthLayout } from "../../../layouts/AuthLayout";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const RegisterPage = () => {

    const { startRegister, errorMessage } = useAuthStore();

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        rpassword: ''
    });

    const {name, email, password, rpassword} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
    
        if([name, email, password, rpassword].includes('')) {
            Swal.fire('Hay campos vacios', 'Por favor complete todos los campos', 'error');
            return;
        }
        
        if (password !== rpassword) {
            Swal.fire('Error en el registro', 'Las contraseñas no son iguales', 'error');
            return;
        }

        startRegister({name, email, password});
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en el registro', errorMessage, 'error');
        }
    }, [errorMessage]);
    
    return (
        <AuthLayout>
            <h3 className="auth__title">Sign Up</h3>

            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={handleRegister}
            >

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

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

                <input
                    type="password"
                    placeholder="Repeat password"
                    name="rpassword"
                    className="auth__input"
                    value={rpassword}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary my-5 w-100"
                >
                    Register
                </button>

                <Link 
                    to="/auth/login"
                >
                    ¿Do you have a account?
                </Link>
            </form>
        </AuthLayout>
    )
}