import React from 'react';
import styled from 'styled-components';

interface CardProps {
    rank: string,
    suit: string,
    hidden: boolean
}

const StyledCard = styled.div`
`;

export const Card = () => {
   return(
    <StyledCard>

    </StyledCard>
   )
}
