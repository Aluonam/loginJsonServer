import React from 'react'
import { useForm } from 'react-hook-form'
import styleLogin from './Login.module.css'

interface FormState {
    user: string;
    pass: string;
}

const Login = () => {

    const { register, handleSubmit, formState: { errors }  } = useForm<FormState>()

    const onSubmit = (data:FormState)=>{
        console.log(data)
    }
    
  return (
    <div>
        <form className={styleLogin.form} onSubmit={handleSubmit(onSubmit)}>
            <label>User</label>
            <input placeholder='Write your user name' type='text' {...register('user', { required: 'El nombre de usuario es requerido' })}></input>
            <label>Password</label>
            <input placeholder='Write your password' type='text'  {...register("pass", { required: {
                      value: true,
                      message: "El campo es requerido"
                    }})}>
                        
             </input>
             
             {errors.pass && <p>{errors.pass.message}</p>}
             
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default Login