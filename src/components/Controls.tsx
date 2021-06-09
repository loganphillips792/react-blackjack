import React from 'react';
import styled from 'styled-components';

interface ControlsProps {
    handleOnHit: () => void,
    setShowAllCards: () => void, 
    showAllCards: boolean
}

const StyledControls = styled.div`

`;


const Controls = ({handleOnHit, showAllCards, setShowAllCards}: ControlsProps) => {
    return(
        <StyledControls>
            <button onClick={setShowAllCards}>
                {showAllCards ? 'Get Back to game' : 'show all cards'}
            </button>
            <button onClick={handleOnHit}>Hit</button>
        </StyledControls>
    );
}

export default Controls;