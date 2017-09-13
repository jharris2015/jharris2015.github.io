var visited = [];
var numPenguins = 18;
var soundEfxYeti;
var soundLoadYeti = "audio_file.mp3"; 
window.onload = loadPenguins;

function loadPenguins() {
	var gameHolder = document.getElementById("gameholder");
	var yetiIndex = Math.floor(Math.random() * numPenguins);
	for(var i = 0; i < numPenguins; i++) {
		var div = document.createElement("div");
		div.style.width = "200px";
		div.style.height = "200px";
		div.style.backgroundImage = 'url("images/mound_' + (i % 9 + 1) + '.png")';
		div.style.float = "left";
		div.onmouseover = penguinOver;
		div.onmouseout = penguinOut;
		div.id = i;
		visited.push(false);
		if(i == yetiIndex) {
			div.onclick = yetiClick;
		}
		else {
			div.onclick = penguinClick;
		}
		
		gameHolder.appendChild(div);
	}
}

function penguinOver() {
	if(!visited[parseInt(this.id)]) {
		this.style.backgroundImage = 'url("images/mound_' + (this.id % 9 + 1) + '_hover.png")';
	}
}

function penguinOut() {
	if(!visited[parseInt(this.id)]) {
		this.style.backgroundImage = 'url("images/mound_' + (this.id % 9 + 1) + '.png")';
	}
}

function penguinClick() {
	this.style.backgroundImage = 'url("images/penguin_' + (this.id % 8 + 1) + '.png")';
	visited[this.id] = true;
}


function yetiClick() {
	this.style.backgroundImage = 'url("images/yeti.png")';
	visited[this.id] = true;
    setTimeout(confirmYeti, 200)
	
}
function confirmYeti() {
	soundEfxYeti = document.getElementById("soundEfxYeti");
	soundEfxYeti.play();
	var confirms = confirm("YOU HIT THE YETI. Hit OK to restart, or CANCEL to go back");
		if(confirms) {
			
			window.location = "game.html";
		}
		else {
	
	}
}


function favFruits() {
	var fruits = ['Strawberries', 'Watermelon', 'Kiwi', 'Grapes', 'Apples'];
	for (var i = 0; i < fruits.length; i++ ) {
		document.write("<li>" + fruits[i] + "</li>");
	}
}

function favAnimals() {
	var animals = ['Dog', 'Elephant', 'Giraffe', 'Pig','Goat'];
	for (var i=0; i< animals.length; i++ ) {
		document.write("<li>" + animals[i] + "</li>");
	 }
 }

 function favMusic() {
	var music = ['Country', 'Pop', 'RnB', 'Hip Hop','Rap'];
	for (var i=0; i< music.length; i++ ) {
		document.write("<li>" + music[i] + "</li>");
		
		}
 }
