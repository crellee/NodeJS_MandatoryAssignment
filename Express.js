var express = require('express');
var app = express();

var fs = require('fs');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	//res.send('<h1>Home Page</h1>');
	res.render('index', homepageinfo);
});

app.get('/about', function(req, res){
	//res.send('<h1>Contact Page</h1>');
		//res.render('contact', objJSON);
		fs.readFile('about.json', 'utf-8', function(err, data) {
			res.render('index', JSON.parse(data));

		});
});

app.listen(3001);

var homepageinfo = {
	title: 'Home',
	subtitle: 'Homepage',
	text: 'this is some text i choose to put in this paragraph'
};

var aboutpageinfo = {
	title: 'About',
	subtitle: 'About page',
	text: 'waiting for json'

};