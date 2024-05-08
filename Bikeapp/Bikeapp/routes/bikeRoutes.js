const express = require('express');
const Bikemodel=require('../model/Bikemodel')
const router = express.Router(); 


router.get('/bike', async (req, res) => {
        let allbikes = await Bikemodel.find();
        res.render('Bike/index', { allbikes })
})

// SHOW A NEW FORM
router.get('/bike/new' , (req,res)=>{
    res.render('Bike/new');
})

// ACTUALLY ADDING IN THE DATABASE
router.post('/bike' , async(req,res)=>{
    let {Company,price ,Mileage, Power} = req.body;
    console.log(req.body);

    await Bikemodel.create({Company,price ,Mileage, Power});
    res.redirect('/bike');
})

// TO SHOW A PARTICULAR Bike
router.get('/bike/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundBike = await Bikemodel.findById(id);
    res.render('bike/show' , {foundBike})

})

// FORM TO EDIT A PARTIICULAR Bike
router.get('/bike/:id/edit' , async(req,res)=>{
    let {id} = req.params;
    let foundBike = await Bikemodel.findById(id);
    res.render('bike/edit' , {foundBike})
})


// TO ACTUALLY CHANGE IN db
router.patch('/bike/:id' , async(req,res)=>{
    let {id} = req.params;
    let {Company,price ,Mileage, Power} = req.body;
    await Bikemodel.findByIdAndUpdate( id , {Company,price ,Mileage, Power});
    res.redirect(`/bike/${id}`);
})

// DELETE THE EXISTING PRODUCT

router.delete('/bike/:id', async (req, res) => {
        let { id } = req.params;
        await Bikemodel.findByIdAndDelete(id);
        res.redirect('/bike');
})

module.exports = router;