import { CardInterface } from '../types';

export default class Hand {
    cards: Array<CardInterface>

    constructor() {
        this.cards = []
    }

    // add a card to the hand
    addCard(card: CardInterface) {
        this.cards.push(card);
    }

    // Calculate the value of teh hand
    calculate() {
        let total = 0;
        
    }

    
}