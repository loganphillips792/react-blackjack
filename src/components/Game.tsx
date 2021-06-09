import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import Controls from './Controls';
import { CardInterface, DeckInterface, HandInterface } from '../types';
import Hand from './Hand';

interface GameProps {
    deck: DeckInterface,
    playerHand: HandInterface,
    dealerHand: HandInterface
}

// interface Card {
//     rank: string,
//     suit: string,
// }

const StyledGame = styled.div``;

const AllCardsContainer = styled.div`
    // Over in Card.tsx, we are defining each card with a width and height. For this reason, FlexBox is not a good choice. 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 50px;
`;

const PlayerHandContainer = styled.div`

`;

const DealerHandContainer = styled.div`

`;

const Game = ({ deck, playerHand, dealerHand }: GameProps) => {

    const [showAllCards, setShowAllCards] = useState(false);
    const [playerCards, setPlayerCards] = useState<CardInterface[]>([]);

    const onHit = () => {
        //playerHand.push(deck)
        playerHand.addCard(deck.draw());
        // To update the view
        //setPlayerCards(playerHand.cards) - did not rerender the UI
        setPlayerCards([...playerHand.cards]);
    }

    // Either show all cards (just thought i would add this in to play around) or show player + dealer hand
    const showAllPlayingCards = () => {
        return (
            <AllCardsContainer>
                {deck.cards.map((card, index) => (
                    <Card
                        key={index}
                        rank={card.rank}
                        suit={card.suit}
                        hidden={false}
                    />
                ))}
            </AllCardsContainer>
        );
    }

    const showNormal = () => {
        return (
            <div>
                <DealerHandContainer>
                    <Hand cards={dealerHand.cards} />
                </DealerHandContainer>

                <PlayerHandContainer>
                    <Hand cards={playerCards} />
                </PlayerHandContainer>
            </div>
        );
    }

    return (
        <StyledGame>
            <h1>Blackjack</h1>

            {!showAllCards ? showNormal() : showAllPlayingCards()}
            
            <Controls 
                handleOnHit={onHit}
                setShowAllCards={() => setShowAllCards(!showAllCards)}
                showAllCards={showAllCards}
            />


        </StyledGame>
    );
}

export default Game;