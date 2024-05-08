const express=require('express');
const Book = require('../models/Book');
const router=express.Router();

router.post('/add_book',async(req,res)=>{
    let {title,price,author,language,url,thumbnail}=req.body;
    // console.log(thumbnail)
    try{
        await Book.create({title,price,author,language,url,thumbnail});
        res.status(201).json({msg:'File Created',bool:true})
    }
    catch(e){
        res.status(409).json({msg:'Something went wrong',bool:false})
    }
})
router.get('/get_books',async(req,res)=>{
    try{
        let books=await Book.find();
        res.status(200).json({books});
    }
    catch(e){
        res.status(400).json({msg:'Something went Wrong'});
    }
})
router.delete('/delete_book/:_id',async(req,res)=>{
    try{
        let {_id}=req.params;
        await Book.findByIdAndDelete(_id);
        res.status(201).json({bool:true})
    }
    catch(e){
        res.status(409).json({bool:false})
    }
})
router.patch('/edit_book',async(req,res)=>{
    let {title,price,author,language,url,thumbnail,_id}=req.body;
    try{
        await Book.findByIdAndUpdate(_id,{title,price,author,language,url,thumbnail})
        res.status(201).json({bool:true})
    }
    catch(e){
        res.status(409).json({bool:false})
    }
})




module.exports=router;