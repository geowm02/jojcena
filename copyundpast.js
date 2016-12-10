function init(){
var h1tags = document.getElementsByTagName("h1");
h1tags[0].onclick = mahnegus;	
}
function mahnegus(){
	this.innerHTML = "Click harder";
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
this.style.color = randomcolor;	
}


onload = init;
