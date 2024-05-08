const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override')
const mongoose=require('mongoose');
const seedDB = require('./seed');
const bikeRoutes = require('./routes/bikeRoutes');



mongoose.connect('mongodb://127.0.0.1:27017/Bike')
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("error while connecting DB" , err)})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
// app.use(express.static(path.join(__dirname , 'public')));
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})) //body parsing middleware
app.use(methodOverride('_method'))//method override


// middleware for routers
app.use(bikeRoutes); //vvvimp

// seedDB()

let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server connected at port ${PORT}`)
})
