import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { edit } from '../Redux/book_slice';
const Book_Card = (props) => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let user=useSelector(state=>state.user.user)
    let {_id,title,author,price,language,url,thumbnail}=props.book;
    let [buyed,setBuyed]=useState(false)
    let makerun=props.makerun;
    let run=props.run
    useEffect(()=>{
        let array=user.purchasedBooks
        if(array.includes(_id)){
            setBuyed(true)
        }
    })
    async function buyop(){
        let response=await axios.post('http://localhost:8080/buy',{_id,user_id:user._id})
        if(response.data.bool){
            setBuyed(true)
        }
    }
    async function delete_book(){
        console.log(_id)
        let response=await axios.delete(`http://localhost:8080/delete_book/${_id}`);
        makerun(!run)  
    }
    async function edit_book(){
        await dispatch(edit(props.book));
        navigate('/edit');
    }
    return (
    <div className='shadow-xl transform hover:scale-105 ease-in-out duration-200 bg-white/30  p-2 gap-5 h-[345px] w-[550px] flex rounded-xl'>
        <div className='w-[240px] flex justify-center rounded-xl '>
            <img src={thumbnail} className='w-[240px] rounded-xl'  alt="" />
        </div>
        <div className='flex flex-col gap-5 w-[300px]'>
        <div className='flex flex-col gap-3'>
            <h3 className='text-3xl font-bold h-[108px] flex items-center'>{title}</h3>
            <div className='flex flex-col gap-2'>
            <p className='text-lg font-medium'>By {author}</p>
            <p className='text-lg font-medium'>Language : {language}</p>
            <p className='text-4xl font-medium'>Rs. {price}</p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            {
                buyed?(
                    <Link to={url} className='flex justify-center items-center bg-blue-600 text-white shadow-xl font-medium p-1 rounded-lg' target='_blank'>View PDF</Link>
                ):(
                    
                    <button className='flex justify-center items-center bg-[rgb(255,101,240)] w-full text-white shadow-xl font-medium p-1 rounded-lg' onClick={()=>buyop()}>Buy</button>
                )
            }
            <div className='flex gap-5'>
            <button className='flex justify-center items-center bg-red-600 text-white shadow-xl w-[50%] font-medium p-1 rounded-lg'     onClick={()=>delete_book()}>Delete</button>
            <button className='flex justify-center items-center bg-[rgb(220,143,65)] text-white shadow-xl w-[50%] font-medium p-1 rounded-lg' onClick={()=>edit_book()}>Edit</button>
            </div>
        </div>
            </div>
    </div>
  )
}

export default Book_Card