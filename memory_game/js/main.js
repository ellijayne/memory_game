console.log("Up and running!");
//console.log("User Flipped " + cardOne);
//console.log("User Flipped " + cardTwo);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!");
} else if (cardsInPlay.length === 2 && cardsInPlay [0] !== cardsInPlay[1]) {
	result = alert("Sorry. Try again.");
}
};

var flipCard = function(cardId) {

console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();

};
flipCard(0);
flipCard(2);





