console.log('Loaded JS from main.js!');

var prod = 'http://aroraamu111.imad.hasura-app.io/'
var dev = 'http://127.0.0.1:8080/';

//switch environment
var env = prod; 
//var env = dev;

// Action 1: change the text of the index.html
//   get the element from html
var consolelement = document.getElementById('main-text');
//   Display on console
consolelement
//   Chnage the content of Html
consolelement.innerHTML = 'New Value in mail html div with main-text element id';

// Action 2: change the style of the element == move the image on click
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight() {
	marginLeft = marginLeft + 1;
	img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
	var interval = setInterval(moveRight, 20);
	//img.style.marginLeft = '100px';
};

// Action 3 (start): Counter code

// Option 1 ==> within client code
//	This button <button id="clickclient">Click Client!</button> has been clicked <span id="clientcount">0</span> times from Client. <br>
var clientbutton = document.getElementById('clickclient');
var clientcounter = 0;
clientbutton.onclick = function() {
	// Render the variable in the correct span
	clientcounter = clientcounter + 1;
	var clientspan = document.getElementById('clientcount');
	clientspan.innerHTML = clientcounter.toString();
};

// Option 2 ==> make equest to servercount endpoint
//	This button <button id="clickserver">Click Server!</button> has been clicked <span id="servercount">0</span> times from server. <br>
var serverbutton = document.getElementById('clickserver');
serverbutton.onclick = function() {
	//	(a)II Create a request object
	var request = new XMLHttpRequest();

	//	(b) capture a response and store it in a variable
	request.onreadystatechange = function () {
		if (request.readyState === XMLHttpRequest.DONE) {
			//take some action
			if (request.status === 200) {
				// request is successfully completed, extract the value from the request
				var servercounter = request.responseText;
	//	(c) Render the variable in the correct span
				var serverspan = document.getElementById('servercount');
				serverspan.innerHTML = servercounter.toString();
			}
		}
		//not done yet
	};
	// (a)I Make a request to the counter endpoint
//	request.open('GET', 'http://127.0.0.1:8080/counter', true); //use this setting on local
//	request.open('GET', 'http://aroraamu111.imad.hasura-app.io/counter', true); //use this setting on server
	request.open('GET', env + 'counter', true);
	request.send(null);
};
// Action 3 (end): Counter code

//// Submit Name
//var nameInput = document.getElementById('name');
//var name = nameInput.value;
//var submitB = document.getElementById('submit_btn');
//submitB.onclick = function() {
//	// make the request to the server and send the name
//	
//	// capture a list of names and render it as a list
//	var names = ['name1', 'name2', 'name3','name4'];
//	var list = '';
//	for (var i=0; i < names.length; i++) {
//		list += '<li>' + names [i] + '</li>';
//	};
	
//	// make the request
//	var ul = document.getElementById('namelist');
//	ul.innerHTML = list;
//};

// Submit Name thru server

var submitB = document.getElementById('submit_btn');
submitB.onclick = function() {
	//	Create a requestB object
	var requestB = new XMLHttpRequest();
	//	(b) capture a response and store it in a variable
	requestB.onreadystatechange = function () {
		if (requestB.readyState === XMLHttpRequest.DONE) {
			//take some action
			if (requestB.status === 200) {
				// Capture a list of names and render it as a list
				var names = requestB.responseText;
				names = JSON.parse(names);
				var list = '';
				for (var i=0; i < names.length; i++) {
					list += '<li>' + names [i] + '</li>';
				};
				var ul = document.getElementById('namelist');
				ul.innerHTML = list;
			}
		}
	};

	// Make a request to the submit-name endpoint
	var nameInput = document.getElementById('name');
	var name = nameInput.value;
//	requestB.open('GET', 'http://127.0.0.1:8080/submit-name?name=' + name, true); //use this setting on local
//	requestB.open('GET', 'http://aroraamu111.imad.hasura-app.io/submit-name?name=' + name, true); //use this setting on server
	requestB.open('GET', env + 'submit-name?name=' + name, true);
	requestB.send(null);
};
