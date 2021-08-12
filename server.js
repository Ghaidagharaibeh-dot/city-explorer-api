'use strict';
const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

const axios = require('axios');

require('dotenv').config();
const PORT = process.env.PORT;


// const weatherdata = require('./weather.json');

const getWeatherFun = require("./Modules/weather");

const getMovieFun = require("./Modules/movie");


// // http://localhost:3001/getMovie?city=${city}
server.get('/getMovie', getMovieFun);


//http://localhost:3001/getWeather?city=${city}&lat=${lat}&lon=${lon}
server.get('/getWeather', getWeatherFun);




server.get('*', (req, res) => {
    res.status(404).send('page not found');

})
server.listen(PORT, () => {
    console.log('hiiiiiii')
    console.log('Hello to chect if service work well') //=>this step to check if my server work in the right way
});





// // // //http://localhost:3001/getWeather?city=
// server.get('/getWeather', getWeatherFun);

// async function getWeatherFun(req, res) {
//     const query = req.query.city;
//     const lat = req.query.lat;
//     const lon = req.query.lon;
//    const url = `https://api.weatherbit.io/v2.0/forecast/daily?query=${query}&lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`
// //   const url = `https://api.weatherbit.io/v2.0/forecast/daily?query=${query}&key=${process.env.WEATHER_API_KEY}`;
//     axios.get(url).then(result => {
//             let weatherArr = result.data;
//             let arr = []
//             for (let i = 0; i < weatherArr.length; i++) {
//                 arr.push(new Forecast(weatherArr[i].datetime, weatherArr[i].weather.description));


//             }

//             res.send('weatherArr')
//         })
//         .catch(err => {
//             res.send('error hiiii');
//         })

// }


// class Forecast {
//     constructor(datetime, description) {
//         this.date = datetime;
//         this.description = description;
//     }
// }
