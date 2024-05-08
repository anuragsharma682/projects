import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import {login} from '../Redux/userSlice'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    async function handleSubmit(e){
        e.preventDefault();
        let a={
            email:e.target.email.value,
            password:e.target.password.value
        }
        let response=await axios.post('http://localhost:8080/login',a);
        response=response.data;
        if(response.bool){
                toast.success('Login Successfull',{
                    position:'top-center'
                })
                await dispatch(login(response.user))
                navigate('/');
        }
        else{
            toast.error('Invalid Credentials',{
                position:'top-center'
            })
        }
    }
  return (
    <div className="flex flex-col w-full gap-14 h-screen justify-center items-center">
         <h1 className="text-7xl font-bold">Login</h1>
         <form className="flex flex-col gap-5 w-[450px]" onSubmit={(e)=>handleSubmit(e)}>
            <div className="flex gap-2 w-full justify-between items-center">
                <label className='text-2xl font-medium w-28 text-white' htmlFor="email">Email</label>
                <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='email' id='email'/>
            </div>
            <div className="flex gap-2 w-full justify-between items-center">
                <label className='text-2xl font-medium w-28 text-white' htmlFor="password">Password</label>
                <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="password" name='password' id='password'/>
            </div>
            <button className="mt-10 w-[450px] flex p-5 text-xl font-bold rounded-xl shadow-2xl  bg-[rgb(188,128,81)] justify-center items-center">Login</button>
        </form>
    </div>
  )
}

export default Login