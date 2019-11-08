/* global fetch */

var express = require('express');
var fs = require('fs');
var router = express.Router();
var request = require('request')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root:  'public' });
});


router.get('/movies', function(req,res) {
var movies = "http://www.omdbapi.com/?t=";
  console.log("In owl");
  console.log(req.query.q);
  var movieTitle = req.query.q;
  for (var i = 0; i < movieTitle.length; i++)
  {
        if (movieTitle.charAt(i) === " ")
            movieTitle = movieTitle.substr(0, i) + "+" + movieTitle.substr(i + 1);
  }
  
  movies += movieTitle;
  movies += "&apikey=12d965de";
  console.log(movies);
  request(movies).pipe(res);
  

});

/*

router.get('/getcity',function(req,res,next) {
    
    console.log("In getcity route");
    fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
    if(err) throw err;
    
    
    var myRe = new RegExp("^" + req.query.q);
    console.log(myRe);
    
    var cities = data.toString().split("\n");
    var jsonresult = [];
    
    for(var i = 0; i < cities.length; i++) {
        var result = cities[i].search(myRe);
        if(result != -1) {
            jsonresult.push({city:cities[i]});
            console.log(cities[i]);
        }
    }
    
 
console.log(jsonresult);

res.status(200).json(jsonresult);


});
});
*/

module.exports = router;
