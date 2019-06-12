////Tell the library which element to use for the table
//cards.init({table:'#GameBoard'});

////Create a new deck of cards
//deck = new cards.Deck();
////By default it's in the middle of the container, put it slightly to the side
//deck.x -= 50;

////cards.all contains all cards, put them all in the deck
//deck.addCards(cards.all);
////No animation here, just get the deck onto the table.
//deck.render({immediate:true});

////Now lets create a couple of hands, one face down, one face up.

//upperhand = new cards.Hand({faceUp:false, y:60});
//playerHand = new cards.Hand({faceUp:true, y:340});

////Lets add a discard pile
//discardPile = new cards.Deck({faceUp:true});
//discardPile.x += 50;

//deck.render({callback:function() {
//	discardPile.addCard(deck.topCard());
//	discardPile.render();
//}});

////Let's deal when the Deal button is pressed:
//function dealCardDeck() {
//	//Deck has a built in method to deal to hands.
//	$('#dealBTN').hide();
//	deck.deal(5, [upperhand, lowerhand], 50, function() {
//		//This is a callback function, called when the dealing
//		//is done.
//		discardPile.addCard(deck.topCard());
//		discardPile.render();
//		playerHand.render();
//	});
//}

////When you click on the top card of a deck, a card is added
////to your hand
//deck.click(function(card){
//	if (card === deck.topCard()) {
//		playerHand.addCard(deck.topCard());
//		playerHand.render();
//	}
//});

////Finally, when you click a card in your hand, if it's
////the same suit or rank as the top card of the discard pile
////then it's added to it
//playerHand.click(function(card){
//	if (card.suit == discardPile.topCard().suit
//		|| card.rank == discardPile.topCard().rank) {
//		discardPile.addCard(card);
//		discardPile.render();
//		playerHand.render();
//	}
//});


//Code for dice game
window.addEventListener('DOMContentLoaded', function () {
    //if the roll button is clicked this adds the dice
    var rollButton = document.getElementById('rollBTN');
    if (rollButton) {
        rollButton.addEventListener('click', handleDiceRoll());
    }

    //this will delete scores
    var deleteScore = document.getElementById('deleteButton');
    if (deleteScore) {
        deleteScore.addEventListener('click', handleDelete());
    }
});

//this rolls and renders the dice
function handleDiceRoll() {

}

//this function deletes the desired score
function handleDelete() {
    console.log("Delete this score");
}