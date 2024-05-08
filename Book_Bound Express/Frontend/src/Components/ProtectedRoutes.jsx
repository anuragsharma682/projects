import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
const ProtectedRoutes = ({children}) => {
  let user=useSelector(state=>state.user.user)
  if(!user){
    toast.warning('Login First',{
      position:'top-center'
    })
  }
    return user?children:<Navigate to='/login'/>
}

export default ProtectedRoutes