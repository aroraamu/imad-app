var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
	
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
	'article-two': {
		title:'Article-two | Amu',
		header:`
			<a href="/">Home</a> | ==> | 
			<a href="/article-one">article-one</a> | 
			<a href="/article-two">article-two</a> |
			<a href="/article-three">article-three</a>
			`,
		heading: 'Article2 What we do',
		date: '19-Sep-2017',
		content:`
			<h4>Project 1</h4>
			<p> details of project 1 </p>
			<h4>Project 2</h4>
			<p> Details of Project 2 </p>
			<ol>
			  <li> Assignment 1: Details of assignment 1. Worked as some very seriously, Worked as some very seriously </li>
			  <li> Assignment 2: Details of assignment 2. Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness </li>
			</ol>
			`
	},
	'article-three': {
		title:'Article-three | Amu',
		header:`
			<a href="/">Home</a> | ==> | 
			<a href="/article-one">article-one</a> | 
			<a href="/article-two">article-two</a> |
			<a href="/article-three">article-three</a>
			`,
		heading: 'Article3 Contact Us',
		date: '19-Sep-2017',
		content:`
			<h4>Phone</h4>
			<p> +91 98101 98101 </p>
			<h4>Email</h4>
			<p> Write to us! </p>
			<ol>
			  <li> Testimony Company A: Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously, Worked as some very seriously </li>
			  <li> Testimony Company B: Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness, Worked without seriousness </li>
			</ol>
			`
	},
	'article-four': {
		title:'Article-four | Amu',
		header:`
			<a href="/">Home</a> | ==> | 
			<a href="/article-one">article-one</a> | 
			<a href="/article-two">article-two</a> |
			<a href="/article-three">article-three</a>
			`,
		heading: 'Article4 Dynamic Help',
		date: '22-Sep-2017',
		content:`
			<h4>Help Section 1</h4>
			<p> Setup Environment </p>
			<h4>Help Section 2</h4>
			<p> Language Help </p>
			<ol>
			  <li> Help on HTML and Style </li>
			  <li> Help on CSS style </li>
			</ol>
			`
	},
	'article-five': {
		title:'Article-five | Amu',
		header:`
			<a href="/">Home</a> | ==> | 
			<a href="/article-one">article-one</a> | 
			<a href="/article-two">article-two</a> |
			<a href="/article-three">article-three</a>
			<a href="/article-four">article-four</a>
			<a href="/article-five">article-five</a>
			`,
		heading: 'Article5 Robo Help',
		date: '23-Sep-2017',
		content:`
			<h4> Dynamic Help Section 1</h4>
			<p> Welcome to Robo </p>
			<h4> what Help you need </h4>
			<p> Help Help </p>
			<ol>
			  <li> Help on Section 1 </li>
			  <li> Help on Section 2 </li>
			</ol>
			`
	}
};

function createTemplate (data) {
	var title = data.title;
	var header = data.header;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;

	var htmltemplate = `
		<html>
			<head>
				<title>
					${title}
				</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link href="/ui/style.css" rel="stylesheet" />
			</head>
			<body>
				<div class='container'>
					<div>
						${header}
					</div>
					<hr/>
					<h3> ${heading} </h3>
					<div>
						${date}
					</div>
					<div>
						${content}
					</div>
				</div>
			</body>
		</html>
	`;
	return htmltemplate;
};

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

//app.get('/article-two', function (req, res) {
//  res.send(createTemplate(articletwo));
//});

// counter code
var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
	// articlename = articlethree
	// articles[articlename] == {} content object for article-three
	var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/pic/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/pic/', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80; //use for iMad server deployment
//var port = 8080; //use for local host deployment

app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});