import { Dispatch, FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    z-index: 1;
    background-color: #505050;
    position: relative;
    display: flex;
    align-items: center;
    div {
        position: absolute;
        background-color: #505050;
        inset: 0 -6px 0 -6px;
    }
    button {
        &:first-of-type {
            right: 1vw;
        }
        &:last-of-type {
            left: 1vw;
        }
        position: absolute;
        filter: drop-shadow(0 0 3px white);
        opacity: 30%;
        width: 20px;
        transition: 0.1s;
        &:hover,
        &:active {
            scale: 105%;
            opacity: 70%;
        }
        svg {
            width: 20px;
        }
    }

    @media (width < 1024px) {
        div {
            inset: 0 -0.5vw 0 -0.5vw;
        }
        button {
            width: 2vw;
            svg {
                width: 2vw;
            }
        }
    }
    @media (width < 480px) {
        div {
            inset: 0 -0.8vw 0 -0.8vw;
        }
        button {
            &:first-of-type {
                right: 1.5vw;
            }
            &:last-of-type {
                left: 1.5vw;
            }
        }
    }
`;

type Props = {
    hiddenWindow: 'none' | 'left' | 'right';
    setHiddenWindow: Dispatch<React.SetStateAction<'none' | 'left' | 'right'>>;
};

const Slider: FC<Props> = ({ hiddenWindow, setHiddenWindow }) => {
    function handleClick(direction: string) {
        if (direction === 'left') {
            if (hiddenWindow === 'none') {
                setHiddenWindow('left');
            }
            if (hiddenWindow === 'right') {
                setHiddenWindow('none');
            }
        }
        if (direction === 'right') {
            if (hiddenWindow === 'none') {
                setHiddenWindow('right');
            }
            if (hiddenWindow === 'left') {
                setHiddenWindow('none');
            }
        }
    }

    return (
        <Container>
            <button onClick={() => handleClick('left')}>
                <svg viewBox="0 0 16 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 3L3.08069 37.2216C3.02798 37.4035 3.02798 37.5965 3.08069 37.7784L13 72"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            <button onClick={() => handleClick('right')}>
                <svg viewBox="0 0 16 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 72L12.9193 37.7784C12.972 37.5965 12.972 37.4035 12.9193 37.2216L3 3"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            <div></div>
        </Container>
    );
};

export default Slider;
