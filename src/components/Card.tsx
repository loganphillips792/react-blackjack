import React from 'react';
import styled, { css } from 'styled-components';
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
// http://www.jimknapp.com/Cards/Non-Bicycle.htm
import PlayingCardBack from '../playing-card-back.jpeg';

interface CardProps {
    rank: string,
    suit: string,
    hidden: boolean
}

const getColor = (suit: string) => {
    if (suit === 'H' || suit === 'D') {
        return 'red';
    } else {
        return '#000';
    }
}

const StyledCard = styled.div<{ suit: string }>`
    position: relative;
    height: var(--card-height);
    width: var(--card-width);
    font-size: 25px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(lighten(#000, 5%), 0.5);

    color: ${(props) => getColor(props.suit)};
    user-select: none;
    margin-left: calc(var(--card-width) / -2);
`;

const Front = styled.div`

`;

const UpperLeft = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`;

const Center = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LowerRight = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
`;

const Rank = styled.div``;

const Suit = styled.div``;

const Back = styled.div<{readonly backgroundImage: string}>`
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
`;

export const Card = ({ rank, suit, hidden }: CardProps) => {

    function renderSuit(suit: string) {
        switch (suit) {
            case 'C':
                return '♣';
            case 'S':
                return '♠';
            case 'D':
                return '♦';
            case 'H':
                return '♥';
        }
    }

    const renderFrontOfCard = () => {
        return (
            <Front>
                <UpperLeft>
                    <Rank>{rank}</Rank>
                    <Suit>{renderSuit(suit)}</Suit>
                </UpperLeft>

                <Center>
                    <Suit>{renderSuit(suit)}</Suit>
                </Center>

                <LowerRight>
                    <Rank>{rank}</Rank>
                    <Suit>{renderSuit(suit)}</Suit>
                </LowerRight>
            </Front>
        );
    }

    const renderBackOfCard = () => {
        return (
            <Back backgroundImage={PlayingCardBack} />
        );
    }

    return (
        <StyledCard suit={suit}>
            {!hidden ? renderFrontOfCard() : renderBackOfCard()}
        </StyledCard>
    )
}
