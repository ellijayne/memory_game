console.log("Up and running!");
var cards = [
{
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png",
},
{
    rank: "Queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png",
},
{
    rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png",
},
{
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png",
}
];


var checkForMatch = function(){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    result = alert("You found a match!");
} else if (cardsInPlay.length === 2 && cardsInPlay [0] !== cardsInPlay[1]) {
    result = alert("Sorry. Try again.");
}
};

var cardsInPlay = [];
var flipCard = function(cardId) {

console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

};

  
flipCard(0);
flipCard(2);