export interface CardInterface {
    rank: string,
    suit: string,
}

export interface DeckInterface {
    cards: Array<CardInterface>,
    draw: () => CardInterface,
}

export interface HandInterface {
    cards: Array<CardInterface>,
    addCard: (card: CardInterface) => void,
    calculate: () => number
}