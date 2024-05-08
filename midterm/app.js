const express = require('express')
const data = require('./Data/data');

const app = express();

app.set('view engine','ejs');

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('working');
});

app.get('/mobile-phone',(req,res)=>{
    res.render('mobile-phone',{data});
})

app.get('/mobile-phone/new',(req,res)=>{
    res.render('add');
})

app.post('/mobile-phone/new/completed',(req,res)=>{

    const id = data.length;
    const newId = id + 1;
    const timestamps = true;

    const{brand,model,operatingsystem,capacity,releasedate} = req.body;

    const newUser = {
        brand,
        model,
        operatingsystem,
        capacity,
        releasedate,
        
    };

    data.push(newUser);

    res.redirect('/mobile-phone');

})

app.get('/mobile-phone/edit/:id',(req,res)=>{



    const{id} = req.params;

    const item = data.find(item=> item.id== parseInt(id));

    console.log('founded brand: ' + item.brand);

    res.render('edit',{item});



})

app.post('/mobile-phone/:id/edit',(req,res)=>{

    const{id} = req.params;

    const BrandToUpdate = data.find(item => item.id === parseInt(id));

    BrandToUpdate.brand = req.body.brand;
    BrandToUpdate.model = req.body.model;
    BrandToUpdate.operatingsystem = req.body.operatingsystem;
    BrandToUpdate.capacity = req.body.capacity;

    res.redirect('/mobile-phone');

})

app.get('/mobile-phone/:id/delete',(req,res)=>{
 
    const{id} = req.params;

    const indexToDelete = data.findIndex(item => item.id === parseInt(id));

    data.splice(indexToDelete, 1);


    res.redirect('/mobile-phone');


})


app.listen(4000,()=>{
console.log('Server Started at port 4000');
})