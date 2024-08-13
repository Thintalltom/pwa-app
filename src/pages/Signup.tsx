import React from 'react'
import { User,  initialUser} from '../types/types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
const [user, setUser] = useState<User>(initialUser)
const [data, setData] = useState([])
const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
}  
const navigate = useNavigate()
const [toggle, setToggle] = useState(false)

const handleData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setData(prevData => ({ ...prevData, ...user }));
   
    localStorage.setItem('password', user.password)
    localStorage.setItem('email', user.email)
    navigate('/login')
};


const toggleHandler = () =>
{
    setToggle(!toggle)
}

return (
    <div className='flex justify-center items-center flex-col border-[1px]'>
        <h1 className='text-center'>Signup</h1>

        <div className=' gap-[20px]'>
            <form onSubmit={handleData}>
                <div className='mt-[10px]'>
                    <label>First Name</label> <br />
                    <input type="text" name="firstName" className='border-[0.5px] rounded' onChange={handleUser} />
                </div>
                <div className='mt-[10px]'>
                    <label>Last Name </label> <br />
                    <input type="text" name="lastName" className='border-[0.5px] rounded' onChange={handleUser}  />
                </div>
                <div className='mt-[10px]'>
                    <label>Email</label> <br />
                    <input type="text" className='border-[0.5px] rounded' name="email" onChange={handleUser}   />
                </div>
                <div className='mt-[10px]'>
                    <label className='text-red-500'>password</label> <br />
                    <input type={toggle ? 'text' : 'password'} name="password" className='border-[0.5px] rounded' onChange={handleUser}  />
                    <p className='cursor-pointer' onClick={toggleHandler}>{toggle ? 'hide' : 'show'}</p>
                </div>
               
                <button type='submit' className='bg-blue-500 rounded p-[10px]'>
                    SignUp
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup