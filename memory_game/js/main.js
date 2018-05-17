console.log("Up and running!");
//console.log("User Flipped " + cardOne);
//console.log("User Flipped " + cardTwo);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!");
} else if (cardsInPlay.length === 2 && cardsInPlay [0] !== cardsInPlay[1]) {
	result = alert("Sorry. Try again.");
}