//https://github.com/crellee/NodeJS_MandatoryAssignment.git
//git repository

var express = require('express');
var app = express();

var fs = require('fs');

app.set('view engine', 'ejs');

var homepageinfo = {
	title: 'Home',
	subtitle: 'Homepage for the Mandatory Assignment',
	text: 'this is some text i choose to put in this paragraph'
};

var aboutpageinfo = {
	title: 'About',
	subtitle: 'About page for the Mandatory Assignment',
	text: 'This text comes from a json file !! :)'
};


fs.writeFileSync('./about.json', JSON.stringify(aboutpageinfo, null, 4) , 'utf-8');	


app.get('/', function(req, res){
	res.render('index', homepageinfo);
});

app.get('/about', function(req, res){
		fs.readFile('about.json', 'utf-8', function(err, data) {
			res.render('index', JSON.parse(data));

		});
});

app.listen(3001);



