'use strict';

const axios = require('axios');

const memoryArr = {};

async function getMovieFun(req, res) {
    const query = req.query.city;

    if (memoryArr[query] !== undefined) {
        res.send(memoryArr[query]);}

        else{
    console.log('inside promise');
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}`
    axios
        .get(URL)
        .then(result => {
            let movieArr = result.data.results;
            let arr = []
            for (let i = 0; i < movieArr.length; i++) {
                arr.push(new Movies(movieArr[i].title, movieArr[i].overview, movieArr[i].vote_average, movieArr[i].vote_count, movieArr[i].poster_path, movieArr[i].popularity, movieArr[i].release_date))

            }
            res.send(arr);


        })
        .catch(err => {
            res.send('error');
            console.log('erorr')
        });
    }
}

class Movies {
    constructor(title, overview, vote_average, vote_count, poster_path, popularity, release_date) {
        this.title = title
        this.overview = overview
        this.vote_average = vote_average
        this.vote_count = vote_count
        this.poster_path = poster_path
        this.popularity = popularity
        this.release_date = release_date
    }

}

module.exports = getMovieFun ;
