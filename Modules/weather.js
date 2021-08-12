const axios = require('axios');



async function getWeatherFun(req, res) {
    const query = req.query.city;
    const lat = req.query.lat;
    const lon = req.query.lon;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?query=${query}&lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`
    axios
        .get(url)
        .then(result => {
            let weatherArr = result.data.data;
            let arr = []
            for (let i = 0; i < weatherArr.length; i++) {
                arr.push(new Forecast(weatherArr[i].datetime, weatherArr[i].weather.description));


            }

            res.send(arr)

        })

    .catch(err => {
        res.send('erorr');
    })
}

class Forecast {
    constructor(datetime, description) {
        this.date = datetime;
        this.description = description;
    }
}
module.exports = getWeatherFun;




// // //http://localhost:3001/gettheservice?cityName=<city_name>&lon=<the_longitude>&lat=<the_latitude>
// server.get('/gettheservice', getWeatherData())
// async function getWeatherData(req, res) {
//     let arr = [];
//     const cityName = req.query.cityName;
//     const lat = req.query.lat;
//     const lon = req.query.lon;
//     const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`;
//     axios
//     .get(URL)
//     .then((result) => {
//         this.setState({

//             let cityweather=result.find(item=>{
//                 if(cityName.toLocaleLowerCase() === item.city_name.toLocaleLowerCase() ){
//                    return item
//                 }
//             });
//         })
//         for (let i = 0; i < cityweather.data.length; i++) {
//                     arr.push(new Forecast( cityweather.data[i].datetime,cityweather.data[i].weather.description) );        
//                 }

//                 res.send(arr);

//     }


// }