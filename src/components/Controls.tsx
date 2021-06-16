import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DealCardsIcon from '../icons/draw_card.svg';
import FingerTapIcon from '../icons/finger_tap.svg';
import HandRotate from '../icons/hand_rotate.svg';
import SplitHand from '../icons/split_hand.svg';

interface ControlsProps {
    handleOnHit: () => void,
    handleOnDeal: () => void,
    handInProgress: boolean,
    canSplit: boolean
}

const StyledControls = styled.div`
    position: fixed;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
`;

const ButtonsRow = styled.div<{ activate: boolean }>`
    display: flex;
    justify-content: center;
    gap: 5rem;
    user-select: none;

    .button {
        border: 2px solid #fff;
        border-radius: 60px;
        // set size of each flex child
        height: 60px;
        width: 60px;
        position: relative;

        &:nth-child(2) {
            transition-delay: 0.1s;
        }

        transition: transform 2s cubic-bezier(0.16, 0.84, 0.32, 1.24);
    }

    .hit,
    .stand,
    .split {
        transform: ${({activate}) =>  activate ? 'translateY(0)' : 'translateY(300px)'};
    }

    .hit {
        background-color: lightblue;
    }

    .stand {
        background-color: red;
    }

    .split {}

    .dealer-button {
        border-radius: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        //border: 2px solid black;
        //border-radius: 60px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;


const Controls = ({ handleOnHit, handleOnDeal, handInProgress, canSplit }: ControlsProps) => {
    const [buttonsRowEnter, setButtonsRowEnter] = useState<boolean>(false);

    const renderHitOrDealButton = () => {
        if (handInProgress) {
            return (
                <div className="button hit" onClick={handleOnHit}>
                    <img src={FingerTapIcon} />
                </div>
            );
        }

        return (
            <div className="button dealer-button" onClick={() => { handleOnDeal(); setButtonsRowEnter(!buttonsRowEnter)}}>
                <img src={DealCardsIcon} />
            </div>
        );
    }

    return (
        <StyledControls>
            <ButtonsRow activate={buttonsRowEnter}>
                {renderHitOrDealButton()}
                
                {handInProgress && (
                    <div className="button stand">
                        <img src={HandRotate} />
                    </div>
                )}

                {(handInProgress && canSplit) && (
                    <div className="button split">
                        <img src={SplitHand} />
                    </div>
                )}
            </ButtonsRow>
        </StyledControls>
    );
}

export default Controls;