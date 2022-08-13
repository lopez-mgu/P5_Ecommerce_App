import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useForm } from "react-hook-form";
import './Auth.css';

const Auth = () => {
    const navigate = useNavigate();

    const [authMode, setAuthMode] = useState("signin")
    const login_url = 'https://p5-lopezmgu-ecommerce-backend.herokuapp.com/api/v1/auth/login';
    const auth_url = 'https://p5-lopezmgu-ecommerce-backend.herokuapp.com/api/v1/users/me';
    const register_url = 'https://p5-lopezmgu-ecommerce-backend.herokuapp.com/api/v1/register';
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const { email, password } =  data;
        const loginData = {
        email: email,
        password: password
       }
        console.log(loginData)
        if (authMode === "signin") {
            axios.post(login_url, loginData)
                .then(res => {
                console.log(res.data)
                console.log(res)
                return (
                    axios.get(auth_url, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${res.data.token}`
                    }
                    }).then(res => {
                    console.log(res.data)
                    setUser(res.data)
                    //   navigate('/profile', { replace: true })
                    })
                )
                })
        }else{
            console.log(data);
            axios.post(register_url, data)
        }
        
    }

    const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const showAlert = (string) => {
        return(
            <div class="warning-container-void">
                <div class="warning-content">
                  <div class="warning-icon">
                    <svg class="warning-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="warning-text">
                    <h3>{string}</h3>
                  </div>
                </div>
            </div>
        )
    }

    if (authMode === "signin") {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Inicia Sesión</h3>
                <div className="text-center">
                    ¿No estás registrado?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                    Registrate
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Correo Electronico</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Ingresa email"
                    {...register("email", { required: true })}
                    />
                    {errors.email && showAlert("Correo requerido...")}
                </div>
                <div className="form-group mt-3">
                    <label>Contraseña</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Ingresa contraseña"
                    {...register("password", { required: true })}
                    />
                    {errors.password && showAlert("Contraseña requerida...")}
                </div>
                <div className="d-grid gap-2 mt-3">
                    <input type="submit" value="Enviar"/>
                </div>
                <p className="text-center mt-2">
                    ¿Olvidaste tu <a href="#">Contraseña?</a>
                </p>
                </div>
            </form>
        </div>
    )
    }

    return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Inicia Sesión</h3>
            <div className="text-center">
                ¿Ya estás registrado?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                    Inicia Sesión
                </span>
            </div>
            <div className="form-group mt-3">
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="ej. Denise"
                    {...register("name", { required: true })}
                />
                {errors.name && showAlert("Nombre requerido...")}
            </div>
            <div className="form-group mt-3">
                <label>Apellido</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="ej. Martinez"
                    {...register("lastname", { required: true })}
                />
                {errors.lastname && showAlert("Apellido requerido...")}
            </div>
            <div className="form-group mt-3">
                <label>Nombre de Usuario</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="ej. dmartinez15"
                    {...register("username", { required: true })}
                />
                {errors.username && showAlert("Nombre de usuario requerido...")}
            </div>
            <div className="form-group mt-3">
                <label>Correo Electronico</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Correo Electronico"
                    {...register("email", { required: true })}
                />
                {errors.email && showAlert("correo requerido...")}
            </div>
            <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Contraseña"
                    {...register("password", { required: true })}
                />
                {errors.password && showAlert("contraseña requerida...")}
            </div>
            <div className="d-grid gap-2 mt-3">
                <input type="submit" value="Enviar"/>
            </div>
            <p className="text-center mt-2">
            ¿Olvidaste tu <a href="#">Contraseña?</a>
            </p>
        </div>
        </form>
    </div>
    )
}

export default Auth;