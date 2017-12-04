// load the things we need
var express = require('express');
var app = express();
var port = 3500;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(port, now_listening);

app.use(express.static('public'))

function now_listening() {
    console.log(port + ' is the magic port');
}

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
    var drinks = [{
            name: 'Bloody Mary',
            drunkness: 3
        },
        {
            name: 'Martini',
            drunkness: 5
        },
        {
            name: 'Scotch',
            drunkness: 10
        }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page 
app.get('/about', function (req, res) {
    res.render('pages/about');
});

//contact page
app.get('/contact', function (req, res) {
    var address = [{
            name: '38 Broadwood Road',
        },
        {
            name: '81 Stanley',
        },
        {
            name: '91 Happy Valley',
        }
    ];

    var number = [{
            number: '92842342',
        },
        {
            number: '54908493',
        },
        {
            number: '425235234',
        }
    ];

    var email = [{
            email: 'fldajfdlja@gmail.com',
        },
        {
            email: 'fldajfdlja@gmail.com',
        },
        {
            email: 'fldajfdlja@gmail.com',
        }
    ];

    res.render('pages/contact', {
        address: address,
        number: number,
        email: email,
    });
});