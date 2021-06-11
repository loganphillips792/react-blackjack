import { CardInterface, DeckInterface } from '../types';

export default class Deck {

    cards: Array<CardInterface>

    public constructor() {
        this.cards = this.create();
    }

    create(): Array<CardInterface> {
        let tempDeck: Array<CardInterface> = [];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const suits = ['H', 'D', 'C', 'S'];

        // In a single deck, there is exactly one card of any given rank in any given suit
        ranks.forEach((rank) => {
            suits.forEach((suit) => {
                tempDeck.push({rank: rank, suit:suit, isHidden: false})
            })
        });

        return tempDeck;
    }

    // remove a card from the deck
    draw(): CardInterface {
        
        const card = this.cards.pop();
        
        //  if the deck is empty, create a new one, and then draw a card from the new deck
        if(card === undefined) {
            this.create();
            return this.draw();
        }

        return card;
    }

    // we dont want the user to be able to call shuffleArray directly
    public shuffle(){}
    
    // https://stackoverflow.com/a/2450976/9599554
    private shuffleArray() {}


    get length(): number {
        return this.cards.length
    }
}