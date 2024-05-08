import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { login } from '../Redux/userSlice'
import {toast} from 'react-toastify'
import books from '../assets/books1.png'
const Navbar = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let user=useSelector(state=>state.user.user)
    function logout(){
        dispatch(login(null))
        toast.success('Logout Successfull',{
            position:'top-center'
        })
        navigate('/login');
    }
  return (
    <div className='flex bg-white/60 fixed w-full p-3 justify-around z-40'>
        <div className='flex justify-center items-center'>
            <img src={books} className='h-14' alt="" />
            <p className='text-xl font-bold'>BooksBound</p>
        </div>
        <div className='flex text-xl font-bold gap-14 items-center'>
            <Link className='hover:text-red-500' to='/'>Home</Link>
            {
                (!user)?(
                    <>
                    <Link className='hover:text-red-500' to='/login'>Login</Link>
                    <Link className='hover:text-red-500' to='/register'>SignUp</Link>
                    </>
                ):(
                    <>
                    <Link className='hover:text-red-500' to='/new'>New</Link>
                    <button className='hover:text-red-500' onClick={()=>logout()}>Logout</button>
                    </>
                )
            }
        </div>
        <div className='flex items-center justify-center gap-2'>
            <p className='text-4xl'><ion-icon name="person-circle-outline"></ion-icon></p>
            <p className='text-xl font-bold text-black'>{user?user.username:''}</p>
        </div>
    </div>
  )
}

export default Navbar