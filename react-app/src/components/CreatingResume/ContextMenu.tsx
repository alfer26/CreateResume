import styled from 'styled-components';
import { Position } from '../../Types';
import { FC } from 'react';

const Container = styled.div`
    border-radius: 30px;
    color: white;
    background-color: rgba(51, 51, 51, 0.92);
    backdrop-filter: blur(4px);
    border: 2px solid #2b2b2b;
    @media (width < 1440px) {
        border-radius: 2vw;
    }
    display: flex;
    flex-direction: column;
    position: absolute;
    transition: 0.8s ease;
    animation: display 0.4s;
    @media (width < 1440px) {
        font-size: 1.5vw;
    }
    @media (width < 1024px) {
        border: 1px solid #2b2b2b;
        font-size: 2vw;
    }
    @keyframes display {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
const Button = styled.button`
    padding: 5px 15px;
    flex-grow: 1;
`;

type Props = {
    position: Position;
    setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
    resetScale: React.Dispatch<React.SetStateAction<number>>;
    resetPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const ContextMenu: FC<Props> = ({ position, setPosition, resetScale, resetPosition }) => {
    const handleClick = () => {
        resetScale(100);
        resetPosition({ x: 0, y: 0 });
        setPosition(null);
    };
    return (
        <Container style={{ left: position.x, top: position.y }} className="contextMenu">
            <Button onClick={handleClick}>Сбросить положение</Button>
        </Container>
    );
};

export default ContextMenu;
