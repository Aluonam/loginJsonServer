import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styleLogin from './Login.module.css'
import axios from 'axios';

interface FormState {
    user: string;
    pass: string;
}

const Login = () => {

    const { register, handleSubmit, formState: { errors }  } = useForm<FormState>()
    const [serverError, setServerError] = useState('');

    const onSubmit = async (data:FormState)=>{
      try{
        const callUserData = await axios.get(`http://localhost:3001/usuarios`)
        console.log('Datos del servidor:', callUserData.data);
        const userData = callUserData.data.find(
          (user: { username: string; password: string }) =>
            user.username === data.user && user.password === data.pass
        );
  
        if (userData) {
          setServerError(''); // Limpiar 
          console.log('Inicio de sesión exitoso:', userData.username);
          setServerError('¡Enhorabuena! Has iniciado sesión correctamente');
        } else {
          setServerError('Usuario o contraseña incorrectos');
        }

      }catch(err){console.error('Error al conectar', err);
        setServerError('Error al conectar con el servidor');}

  }

    
  return (
    <div className={styleLogin.boxForm}>
      <h2 className={styleLogin.title}>Login</h2><p> juan 123456</p>
        <form className={styleLogin.form} onSubmit={handleSubmit(onSubmit)}>

          <div className={styleLogin.formItem}>
            <label>User</label>
            <input placeholder='Write your user name' type='text' {...register('user', { required: 'El nombre de usuario es requerido' })}></input>
            {errors.user && <p className={styleLogin.warnErr}>{errors.user.message}</p>}
          </div>

          <div className={styleLogin.formItem}>
            <label>Password</label>
            <input placeholder='Write your password' type='text'  {...register("pass", { required: {
                      value: true,
                      message: "El campo es requerido"
                    }})}>
             </input>
             {errors.pass && <p className={styleLogin.warnErr}>{errors.pass.message}</p>}
          </div>
           
             {serverError && <p className={styleLogin.warnErr}>{serverError}</p>}
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default Login