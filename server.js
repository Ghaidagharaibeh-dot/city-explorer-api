'use strict';
const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();


// const PORT=3001;
const PORT = process.env.PORT;
server.use(cors());

const weatherdata=require('./weather.json');
// console.log(weatherdata);

//http://localhost:3001/gettheservice?cityName=Amman (/gettheservice === route)
server.get('/gettheservice',(req,res)=>{
    let cityName=req.query.cityName
    let city=weatherdata.find(item => {
        console.log(item.city_name)
        // if(item.city_name == cityName){
            // console.log('hi',item.city_name)
        //  return item
        return item.city_name === cityName;

        

    });
    console.log(city);
    res.send(city);


})

server.get('*',(req,res)=>{
    res.status(404).send('page not found error 404');

})
server.listen(PORT,()=>{
    console.log('Hello to chect if service work well') //=>this step to check if my server work in the right way
});

