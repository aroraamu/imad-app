console.log('Loaded JS from main.js!');

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
//	request.open('GET', 'http://127.0.0.1:8080/counter', true);
	request.open('GET', 'http://aroraamu111.imad.hasura-app.io/counter', true);
	request.send(null);
};
// Action 3 (end): Counter code