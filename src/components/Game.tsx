import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import Controls from './Controls';
import { CardInterface, DeckInterface, HandInterface } from '../types';
import Hand from './Hand';
import Button from '@material-ui/core/Button';

interface GameProps {
    deck: DeckInterface,
    playerHand: HandInterface,
    dealerHand: HandInterface
}

const StyledGame = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const GameTypeButtons = styled.div`

`;

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

enum GameType {
    Regular = "REGULAR",
    ShowAllCards = "SHOW_ALL_CARDS"
}

const Game = ({ deck, playerHand, dealerHand }: GameProps) => {

    const [showAllCards, setShowAllCards] = useState(false);
    const [playerCards, setPlayerCards] = useState<CardInterface[]>([]);
    const [gameType, setGameType] = useState<string>('');

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

    const showNormal = (): JSX.Element => {
        return (
            <div>
                <DealerHandContainer>
                    <Hand cards={dealerHand.cards} />
                </DealerHandContainer>

                <PlayerHandContainer>
                    <Hand cards={playerCards} />
                </PlayerHandContainer>

                <Controls
                    handleOnHit={onHit}
                />
            </div>
        );
    }

    const renderGameType = (gameType: string): JSX.Element => {
        switch (gameType) {
            case GameType.Regular:
                return showNormal()
            case GameType.ShowAllCards:
                return showAllPlayingCards()
            default:
                return <></>
        }
    }

    return (
        <StyledGame>
            <div>
                <h1>Blackjack</h1>

                {renderGameType(gameType)}

                <GameTypeButtons>
                    <span>Game Options</span>
                    <Button variant="outlined" onClick={() => setGameType(GameType.Regular)}>Normal</Button>
                    <Button variant="outlined" onClick={() => setGameType(GameType.ShowAllCards)}>Show All Cards</Button>
                </GameTypeButtons>

            </div>
        </StyledGame>
    );
}

export default Game;