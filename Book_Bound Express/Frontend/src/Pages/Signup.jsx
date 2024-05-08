import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
const Signup = () => {
    async function handleSubmit(e){
        e.preventDefault();
        let a={
            email:e.target.email.value,
            username:e.target.username.value,
            password:e.target.password.value
        }
        let response=await axios.post('http://localhost:8080/register',a);
        response=response.data;
        if(response.bool){
            if(response.bool1){
                toast.success('Registeration Successfull',{
                    position:'top-center'
                })
            }
            else{
                toast.warning('User already exists',{
                    position:'top-center'
                })
            }
        }
        else{
            toast.error('Something went wrong',{
                position:'top-center'
            })
        }
    }
  return (
    <div className="flex flex-col w-full gap-14 h-screen justify-center items-center">
        <h1 className="text-7xl font-bold">Register</h1>
        <form className="flex flex-col gap-5 w-[450px]" onSubmit={(e)=>handleSubmit(e)}>
            <div className="flex gap-2 w-full justify-between items-center">
                <label className='text-2xl font-medium w-28 text-white' htmlFor="email">Email</label>
                <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='email' id='email'/>
            </div>
            <div className="flex gap-2 w-full justify-between items-center">
                <label className='text-2xl font-medium w-28 text-white'  htmlFor="username">Username</label>
                <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='username' id='username'/>
            </div>
            <div className="flex gap-2 w-full justify-between items-center">
                <label className='text-2xl font-medium w-28 text-white'  htmlFor="password">Password</label>
                <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="password" name='password' id='password'/>
            </div>
            <button className="mt-10 w-[450px] flex p-5 text-xl font-bold rounded-xl shadow-2xl  bg-[rgb(188,128,81)] justify-center items-center">Signup</button>
        </form>
    </div>
  )
}

export default Signup