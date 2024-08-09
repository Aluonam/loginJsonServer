import React from 'react'
import { useForm } from 'react-hook-form'
import styleLogin from './Login.module.css'

const Login = () => {

    const { register, handleSubmit } = useForm()
    
  return (
    <div>
        <form className={styleLogin.form}>
            <label>User</label>
            <input placeholder='Write your user name' type='text'></input>
            <label>Password</label>
            <input placeholder='Write your password' type='text'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default Login