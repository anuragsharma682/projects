import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
const Edit = () => {
    const book=useSelector(state=>state.book.item)
    const [title,setTitle]=useState(book.title)
    const [price,setPrice]=useState(book.price)
    const [author,setAuthor]=useState(book.author)
    const [language,setLanguage]=useState(book.language)
    const [thumbnail,setThumbnail]=useState(book.thumbnail)
    async function editted(){
        let a={
            title,
            price,
            author,
            language,
            url:book.url,
            thumbnail,
            _id:book._id
        }
        let response=await axios.patch('http://localhost:8080/edit_book',a);
        response=response.data.bool
        if(response){
            toast.success('Book Edit Successfull',{
                position:'top-center'
            })
        }
        else{
            toast.error('Something went wrong',{
                position:'top-center'
            })
        }
    }
  return (
    <div className="flex flex-col w-full gap-14 h-screen justify-center items-center">
    <h1 className="text-7xl font-bold">Edit</h1>
    <form className="flex flex-col gap-5 w-[450px]">
      <div className="flex gap-2 w-full justify-between items-center">
          <label className='text-2xl font-medium w-28 text-white' htmlFor="title">Title</label>
          <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='title' id='title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
      </div>
      
      <div className="flex gap-2 w-full justify-between items-center">
          <label className='text-2xl font-medium w-28 text-white' htmlFor="price">Price</label>
          <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='price' id='price' onChange={(e)=>setPrice(e.target.value)} value={price}/>
      </div>
      <div className="flex gap-2 w-full justify-between items-center">
          <label className='text-2xl font-medium w-28 text-white' htmlFor="author">Author</label>
          <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='author' id='author' onChange={(e)=>setAuthor(e.target.value)} value={author}/>
      </div>
      <div className="flex gap-2 w-full justify-between items-center">
          <label className='text-2xl font-medium w-28 text-white' htmlFor="language">Language</label>
          <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='language' id='language' onChange={(e)=>setLanguage(e.target.value)} value={language}/>
      </div>
      <div className="flex gap-2 w-full justify-between items-center">
            <label className='text-2xl font-medium w-28 text-white' htmlFor="thumbnail">Cover Image</label>
            <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='thumbnail' id='thumbnail' onChange={(e)=>setThumbnail(e.target.value)} value={thumbnail} />
        </div>
    </form>
    <button className="mt-10 w-[450px] flex p-5 text-xl font-bold rounded-xl shadow-2xl  bg-[rgb(210,62,131)] justify-center items-center"
        onClick={()=>editted()}>Edit</button>
  </div>
  )
}

export default Edit