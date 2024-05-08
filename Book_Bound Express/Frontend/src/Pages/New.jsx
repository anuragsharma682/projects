import React, { useState } from "react";
import DropboxChooser from 'react-dropbox-chooser'
import axios from 'axios'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const New = () => {
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [author,setAuthor]=useState('')
    const [language,setLanguage]=useState('')
    const [thumbnail,setThumbnail]=useState('')
    async function handleSuccess(files){
        let a={title,price,author,language,url:files[0].link,thumbnail};
        let response=await axios.post('http://localhost:8080/add_book',a);
        response=response.data;
        if(response.bool){
            toast.success(response.msg,{
                position:"top-center"
            });
        }
        else{
            toast.error(response.msg,{
                position:"top-center"
            });
        }
    }
  return (
    <div className="flex flex-col w-full gap-14 h-screen justify-center items-center">
      <h1 className="text-7xl font-bold">Upload</h1>
      <div>
      <form className="flex flex-col gap-5 w-[450px]">
        <div className="flex gap-2 w-full justify-between items-center">
            <label className='text-2xl font-medium w-28 text-white' htmlFor="title">Title</label>
            <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='title' id='title' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        
        <div className="flex gap-2 w-full justify-between items-center">
            <label className='text-2xl font-medium w-28 text-white' htmlFor="price">Price</label>
            <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='price' id='price' onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className="flex gap-2 w-full justify-between items-center">
            <label className='text-2xl font-medium w-28 text-white' htmlFor="author">Author</label>
            <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='author' id='author' onChange={(e)=>setAuthor(e.target.value)}/>
        </div>
        <div className="flex gap-2 w-full justify-between items-center">
            <label className='text-2xl font-medium w-28 text-white' htmlFor="language">Language</label>
            <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='language' id='language' onChange={(e)=>setLanguage(e.target.value)} />
        </div>
        <div className="flex gap-2 w-full justify-between items-center">
            <label className='text-2xl font-medium w-28 text-white' htmlFor="thumbnail">Cover Image</label>
            <input className='bg-white/40 font-medium p-3 text-2xl rounded-xl outline-none' type="text" name='thumbnail' id='thumbnail' onChange={(e)=>setThumbnail(e.target.value)} />
        </div>
      </form>
      <div className="mt-10 w-[450px] flex p-5 text-xl font-bold rounded-xl shadow-2xl  bg-[rgb(210,62,131)] justify-center items-center">
        <DropboxChooser
          appKey={"zabk8q9zh6qvq2r"}
          success={(files) => handleSuccess(files)}
        ></DropboxChooser>
      </div>
      </div>
    </div>
  );
};

export default New;
