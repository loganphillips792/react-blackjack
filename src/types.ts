export interface CardInterface {
    rank: string,
    suit: string,
    isHidden: boolean
}

export interface DeckInterface {
    cards: Array<CardInterface>,
    draw: () => CardInterface,
    length: number
}

export interface HandInterface {
    cards: Array<CardInterface>,
    addCard: (card: CardInterface) => void,
    calculate: () => number,
    canSplit: () => boolean
}