import { useState } from 'react';
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
   //position: relative;
`;

const GameTypeButtons = styled.div``;

const NormalGameContainer = styled.div`
   
    // This class is needed due to the following CSS spec: https://stackoverflow.com/a/37953806/9599554
    // if .cards div is removed, and then the CSS is put on NormalGameContainer, a new containing block is created.
    .cards {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    
    .even-columns {
        display: flex;
        justify-content: center;

        & > * {
            flex: 1 1 auto;            
        }
    }
`;

const AllCardsContainer = styled.div`
    // Over in Card.tsx, we are defining each card with a width and height. For this reason, FlexBox is not a good choice. 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 50px;
`;

const HandContainer = styled.div`
    // Center each flex child (which is a Card)
    display: flex;
    justify-content: center;
`;

const PlayerHandContainer = styled(HandContainer)``;

const DealerHandContainer = styled(HandContainer)``;

enum GameType {
    Regular = "REGULAR",
    ShowAllCards = "SHOW_ALL_CARDS"
}

const Game = ({ deck, playerHand, dealerHand }: GameProps) => {

    const [playerCards, setPlayerCards] = useState<CardInterface[]>([]);
    const [dealerCards, setDealerCards] = useState<CardInterface[]>([]);
    const [gameType, setGameType] = useState<string>('');
    const [handInProgress, setHandInProgress] = useState<boolean>(false);

    const onHit = () => {
        playerHand.addCard(deck.draw());
        //To update the view. setPlayerCards(playerHand.cards) - did not rerender the UI
        setPlayerCards([...playerHand.cards]);
    }

    // Dealer gives one card face up to each player in rotation clockwise, and then one card face up to themselves
    // Another round of cards is then dealt face up to each player, but the dealer takes the second card face down.
    const onDeal = () => {
        console.log("ON DEAl")
        setHandInProgress(true);
        
        playerHand.addCard(deck.draw());
        dealerHand.addCard(deck.draw());

        playerHand.addCard(deck.draw());
        dealerHand.addCard({...deck.draw(), isHidden: true});

        setDealerCards(dealerHand.cards);
        setPlayerCards(playerHand.cards);

    }

    const showNormal = (): JSX.Element => {
        console.log("show normal")
        return (
            <NormalGameContainer>
                <div className="cards">
                    <div className="even-columns">
                        <PlayerHandContainer>
                            <Hand cards={playerCards} />
                        </PlayerHandContainer>

                        <DealerHandContainer>
                            <Hand cards={dealerCards} />
                        </DealerHandContainer>
                    </div>
                </div>
                <Controls
                    handleOnHit={onHit}
                    handleOnDeal={onDeal}
                    handInProgress={handInProgress}
                    canSplit={playerHand.canSplit()}
                />
            </NormalGameContainer>
        );
    }

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
        
            <h1>Blackjack</h1>

            {renderGameType(gameType)}

            <GameTypeButtons>
                <span>Game Options</span>
                <Button variant="outlined" onClick={() => setGameType(GameType.Regular)}>Normal</Button>
                <Button variant="outlined" onClick={() => setGameType(GameType.ShowAllCards)}>Show All Cards</Button>
            </GameTypeButtons>
        </StyledGame>
    );
}

export default Game;