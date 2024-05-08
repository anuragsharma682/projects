const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    },
    language:{
        type:String,
        required:true,
        trim:true
    },
    url:{
        type:String,
        required:true,
        trim:true
    },
    thumbnail:{
        type:String,
        required:true,
        trim:true
    }
});
const Book=mongoose.model('Book',bookSchema);
module.exports=Book;
