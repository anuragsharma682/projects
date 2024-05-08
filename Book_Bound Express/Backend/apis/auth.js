const express=require('express')
const router=express.Router();
const bcrypt=require('bcrypt');
const User = require('../models/User');


router.post('/register',async(req,res)=>{
    let{email,password,username}=req.body;
    try{
    let user=await User.find({email});
    console.log(user)
    if(user.length!=0){
        res.status(200).json({bool:true, bool1:false})
    }
    else{
        let hashedPass=await bcrypt.hash(password,10);
        await User.create({email,password:hashedPass,username});
        res.status(201).json({bool:true,bool1:true})
    }
    }
    catch(e){
        res.status(409).json({bool:false});
    }
})
router.post('/login',async(req,res)=>{
    let {email,password}=req.body;
    let user=await User.findOne({email})
    if(user){
        bcrypt.compare(password,user.password).then((result)=>{
            if(result){
                res.status(200).json({bool:true,user})
            }
            else{
                res.status(200).json({bool:false})
            }
        })
    }
    else{
        res.status(200).json({bool:false})
    }
})
router.post('/buy',async(req,res)=>{
    try{
        let {_id,user_id}=req.body;
    let user=await User.findById(user_id)
    user.purchasedBooks.push(_id);
    await user.save()
    res.status(200).json({bool:true})}
    catch(e){
        res.status(200).json({bool:false})
    }
})

module.exports=router;