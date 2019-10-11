var numSquares=6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var buttonReset = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
		setUpModeButtons();
		setUpSquares();
		reset();
}

function setUpModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent==="Easy"?numSquares=3: numSquares=6;
				reset();
			});
		}
}

function setUpSquares(){
			for (var i =0; i<squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];

			squares[i].addEventListener("click", function(){
				var clickedColor=this.style.backgroundColor;

				if (clickedColor===pickedColor) {
					messageDisplay.textContent = "Correct!";
					changeColor(clickedColor);
					h1.style.backgroundColor = clickedColor;
					buttonReset.textContent = "Play Again?";
				}else{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
			});
		}
}

function reset(){
	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	buttonReset.textContent = "New Colors";
	colorDisplay.textContent=pickedColor;
	for (var i =0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	
	}

	h1.style.backgroundColor = "steelblue";

}

buttonReset.addEventListener("click", function() {
	reset();
});

function changeColor(color){
	for (var i =0; i<squares.length; i++) {
	squares[i].style.backgroundColor = color;
}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}