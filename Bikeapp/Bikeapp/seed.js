const mongoose = require('mongoose');
const Bikemodel = require('./model/Bikemodel');

let allbikes = [
    {
        Company:"Pulsar" ,
        price: 1500000 ,
        Mileage:55,
        Power:"150 cc"
       
    },
    {
        Company:"HeroHonda" ,
        price: 1500000 ,
        Mileage:55,
        Power:"150 cc"
       
    },
    {
        Company:"Pulsar" ,
        price: 1500000 ,
        Mileage:55,
        Power:"150 cc"
       
    },
    {
        Company:"Pulsar" ,
        price: 1500000 ,
        Mileage:55,
        Power:"150 cc"
       
    },
    {
        Company:"Pulsar" ,
        price: 1500000 ,
        Mileage:55,
        Power:"150 cc"
       
    },
]


async function seedDB(){
    await Bikemodel.insertMany(allbikes);
    console.log("Data seeded");
}

module.exports = seedDB;