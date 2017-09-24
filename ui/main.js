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
	marginLeft = marginLeft + 2;
	img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
	var interval = setInterval(moveRight, 20)
	//img.style.marginLeft = '200px';
};