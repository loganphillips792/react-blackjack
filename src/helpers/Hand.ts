import { CardInterface } from '../types';

export default class Hand {
    cards: Array<CardInterface>

    constructor() {
        this.cards = []
    }

    // add a card to the hand
    addCard(card: CardInterface): void {
        this.cards.push(card);
    }

    // Calculate the value of teh hand
    calculate(): number {
        let total = 0;
        return total;
    }

    // determines whether this hand can be split
    canSplit(): boolean {
        return true;
    }
}