const mongoose=require('mongoose');


const bikeSchema=new mongoose.Schema({
    Company:{
       type: String,
       required:true,
       trim:true,
    },
    
    launch:{
        type:Date,
        required:true,
    },
})

const BikeSchema=mongoose.model('BikeSchema',bikeSchema);
module.exports=BikeSchema;