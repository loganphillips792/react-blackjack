export interface CardInterface {
    rank: string,
    suit: string,
}

export interface DeckInterface {
    cards: Array<CardInterface>,
    draw: () => any,
}

export interface HandInterface {
    cards: Array<CardInterface>,
    addCard: (card: CardInterface) => void,
    calculate: () => number
}