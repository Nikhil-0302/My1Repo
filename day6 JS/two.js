

<<< Objects >>>   Objects is the smallest unit and it is a collection of properties


var moviname = "MadMax"
var movirating = 4.7
var movigenre = 'Action'

/// For one object

var movie = {
    name : "MadMax",
    rating : 4.7,
    genre : 'Action'
}

// access through . notation
undefined
movie
{name: "MadMax", rating: 4.7, genre: "Action"}
typeof(movie)
"object"
movie.name
"MadMax"
movie.genre
"Action"
movie.rating
4.7
movie.lang="English"
"English"
movie
{name: "MadMax", rating: 4.7, genre: "Action", lang: "English"}
movie.rating=4.2
4.2
movie
{name: "MadMax", rating: 4.2, genre: "Action", lang: "English"}
delete movie.genre
true
movie
{name: "MadMax", rating: 4.2, lang: "English"}

/// access through square notation

undefined
movie["genre"]
"Action"
movie['name']
"MadMax"


<<< Json  >>>  JavaScript Object Notation

/// If we have multiple objects in a array


var movies = [
    {
        name : "MadMax",
        rating : 4.7,
        genre : 'Action'
    },
    {
        name : "Shark",
        rating : 4.1,
        genre : 'Thril'
    },
    {
        name : "Hulk",
        rating : 4.7,
        genre : 'Comedy'
    }    
]


undefined
movies[2]
{name: "Hulk", rating: 4.7, genre: "Comedy"}
movies[2].genre
"Comedy"
movies[1].rating = 4.5
4.5
movies[1]
{name: "Shark", rating: 4.5, genre: "Thril"}

/// To print all movies

for(i=0;i<movies.length;i++){
    console.log(movies[i])
}

VM1242:20 {name: "MadMax", rating: 4.7, genre: "Action"}
VM1242:20 {name: "Shark", rating: 4.1, genre: "Thril"}
VM1242:20 {name: "Hulk", rating: 4.7, genre: "Comedy"}


///// Try running this in node.js

var movies = [
    {
        name : "MadMax",
        rating : 4.7,
        genre : 'Action'
    },
    {
        name : "Shark",
        rating : 4.1,
        genre : 'Thril'
    },
    {
        name : "Hulk",
        rating : 4.7,
        genre : 'Comedy'
    }    
]
movies.map((data) => {return data})

movies.filter((data) => {return data.rating>4.5})
