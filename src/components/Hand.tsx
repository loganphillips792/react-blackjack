import React from 'react';
import styled from 'styled-components';
import { CardInterface } from '../types';
import { Card } from './Card';
import Controls from './Controls';

interface HandProps {
    cards: Array<CardInterface>
}

const StyledHand = styled.div`
    display: flex;
`;

const Hand = ({ cards }: HandProps) => {
    return (
        <StyledHand>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    rank={card.rank}
                    suit={card.suit}
                    hidden={false}
                />
            ))

            }
        </StyledHand>
    )
}

export default Hand;