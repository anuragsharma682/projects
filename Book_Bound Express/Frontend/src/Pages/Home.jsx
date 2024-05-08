import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book_Card from '../Components/Book_Card'
import Home_main from '../Components/Home_main'
const Home = () => {
    let [files,setFiles]=useState([])
    
    let [run,makerun]=useState(false)
    useEffect(()=>{
        async function ab(){
            let response=await axios.get('http://localhost:8080/get_books');
            response=response.data.books;
            setFiles(response);
        }
        ab();
    },[run])
  return (
    <div>
        <Home_main />
        <div className='grid grid-cols-3 p-14 gap-14'>
        {
            files.map((book,index)=>(
                <Book_Card book={book} makerun={makerun} run={run}/>
            ))
        }
        </div>
    </div>
  )
}

export default Home