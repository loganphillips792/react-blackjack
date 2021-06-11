import React from 'react';
import styled from 'styled-components';

interface ControlsProps {
    handleOnHit: () => void,
    handleOnDeal: () => void,
    handInProgress: boolean
}

const StyledControls = styled.div`

`;


const Controls = ({handleOnHit, handleOnDeal, handInProgress}: ControlsProps) => {
    return(
        <StyledControls>
            {handInProgress ? <button onClick={handleOnHit}>Hit</button> : <button onClick={handleOnDeal}>Deal</button>}
        </StyledControls>
    );
}

export default Controls;