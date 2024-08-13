import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialLogin, Logininfo } from '../types/types'
const Login = () => {
    const [loginSave, setLoginSave] = useState<Logininfo>(initialLogin)
    
    const navigate = useNavigate()

    const handleLogin =  (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginSave({...loginSave, [e.target.name]: e.target.value})
    }  
    const checkInfo = () => {
        const storedPassword = localStorage.getItem('password')
        const storedEmail = localStorage.getItem('email')
    if(loginSave.email === storedEmail && loginSave.password === storedPassword)
    {
        navigate('/mainpage')
    } else 
    {
        console.log('user does not exist')
    }
  }
    return (
    <div>
        
        <div className='text-center mt-[20px]'>
            Login Page
        </div>

        <div className='flex justify-center items-center'>
            <form onSubmit={checkInfo}>
                <div >
                    <label>Email</label> <br />
                    <input className='border-[1px]' name='email' type="email" value={loginSave.email} onChange={handleLogin} />
                </div>
                <div className='mt-[20px]'>
                    <label>Password</label> <br />
                    <input className='border-[1px]' name='password' type="password" value={loginSave.password} onChange={handleLogin} />
                </div>
                <div className='mt-[20px]'>
                    <button type="submit" className='bg-red-500 border-[0.5px] p-[10px] rounded'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login