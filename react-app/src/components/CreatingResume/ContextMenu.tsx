import styled from 'styled-components';
import { Position } from '../../Types';
import { FC } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #883005;
    position: absolute;
    width: 20vw;
    transition: 0.8s ease;
    display: flex;
    animation: display 0.4s;
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
    margin: 3px;
    border-radius: 7px;
    background-color: #f59300;
    flex-grow: 1;
`;

type Props = {
    position: Position;
    setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
    resetScale: React.Dispatch<React.SetStateAction<number>>;
    resetPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const ContextMenu: FC<Props> = ({ position, setPosition, resetScale, resetPosition }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        resetScale(100);
        resetPosition({ x: 0, y: 0 });
        setPosition(null);
    };
    return (
        <Container style={{ left: position.x, top: position.y }} className="contextMenu">
            <Button
                onClick={(e) => {
                    handleClick(e);
                }}
            >
                Сбросить положение
            </Button>
        </Container>
    );
};

export default ContextMenu;
