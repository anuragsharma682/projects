const mongoose=require('mongoose');



const bikeModel=new mongoose.Schema({
    Company:{
       type: String,
       required:true,
       trim:true,
    },
    price:{
       type: Number,
       required:true,
       
    },
    Mileage:{
       type: Number,
       required:true,
       
    },
    Power:{
       type: String,
       required:true,
    },
})

const Bikemodel=mongoose.model('Bikemodel',bikeModel);
module.exports=Bikemodel;