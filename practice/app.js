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

app.get('/shirts',(req,res)=>{
    res.render('shirts',{data});
})

app.get('/shirts/new',(req,res)=>{
    res.render('add');
})

app.post('/shirts/new/completed',(req,res)=>{

    const id = data.length;
    const newId = id + 1;
    const timestamps = true;

    const{fabric,size,pattern,shirtColor,price} = req.body;

    const newUser = {
        id : newId,
        fabric,
        size,
        pattern,
        shirtColor,
        price,
        timestamps,
    };

    data.push(newUser);

    res.redirect('/shirts');

})

app.get('/shirts/edit/:id',(req,res)=>{



    const{id} = req.params;

    const item = data.find(item=> item.id== parseInt(id));

    console.log('founded shirt: ' + item.fabric);

    res.render('edit',{item});



})

app.post('/shirts/:id/edit',(req,res)=>{

    const{id} = req.params;

    const shirtToUpdate = data.find(item => item.id === parseInt(id));

    shirtToUpdate.fabric = req.body.fabric;
    shirtToUpdate.size = req.body.size;
    shirtToUpdate.pattern = req.body.pattern;
    shirtToUpdate.price = req.body.price;

    res.redirect('/shirts');

})

app.get('/shirts/:id/delete',(req,res)=>{
 
    const{id} = req.params;

    const indexToDelete = data.findIndex(item => item.id === parseInt(id));

    data.splice(indexToDelete, 1);


    res.redirect('/shirts');


})


app.listen(4000,()=>{
console.log('Server Started at port 4000');
})