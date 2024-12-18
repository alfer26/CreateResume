import styled from 'styled-components';
import ParagraphPlace from './ParagraphPlace';
import { FC, useRef, useState } from 'react';
import ContextMenu from './ContextMenu';
import { Position } from '../../Types';

const Container = styled.div`
    transition: 0.8s ease;
    overflow: hidden;
    display: flex;
    position: relative;
`;

type Props = {
    hiddenWindow: 'none' | 'left' | 'right';
};

const CreatingResume: FC<Props> = ({ hiddenWindow }) => {
    const widthValue = () => {
        if (hiddenWindow == 'left') {
            return 'calc(100vw - 6px)';
        }
        return 'calc(50vw - 6px)';
    };

    const [scale, setScale] = useState(100);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const refContainer = useRef<HTMLDivElement | null>(null);
    const [showContextMenu, setShowContextMenu] = useState<Position | null>(null);

    const handleWheelScroll = (value: number) => {
        value = value / 20;

        if (scale + value <= 300 && scale + value >= 30) {
            setScale(scale + value);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.buttons === 4) {
            setPosition({ x: position.x + e.movementX / (scale / 100), y: position.y + e.movementY / (scale / 100) });
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (showContextMenu && e.target instanceof HTMLElement) {
            const contextMenu = e.target.closest('.contextMenu');
            if (contextMenu) return;
        }
        setShowContextMenu(null);
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.button === 2) {
            if (!refContainer.current) return;
            const boundingClientRect = refContainer.current.getBoundingClientRect();
            setShowContextMenu({ x: e.clientX - boundingClientRect.left, y: e.clientY - boundingClientRect.top });
        }
    };

    return (
        <Container
            ref={refContainer}
            style={{ width: widthValue() }}
            onWheel={(e) => handleWheelScroll(e.deltaY)}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseUp={(e) => handleMouseUp(e)}
            onContextMenu={(e) => {
                e.preventDefault();
            }}
        >
            <ParagraphPlace scale={scale} position={position} refParent={refContainer} />
            {showContextMenu && (
                <ContextMenu position={showContextMenu} setPosition={setShowContextMenu} resetScale={setScale} resetPosition={setPosition} />
            )}
        </Container>
    );
};

export default CreatingResume;
