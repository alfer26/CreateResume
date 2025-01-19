import { FC, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Position } from '../../../Types';
import Sheet from '../../Sheet';

const Container = styled.div`
    margin: auto;
    animation: display 0.3s;
    @keyframes display {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

type Props = {
    scale: number;
    position: Position;
    refParent: React.MutableRefObject<HTMLDivElement | null>;
    resetScale: React.Dispatch<React.SetStateAction<number>>;
    resetPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const ParagraphPlace: FC<Props> = ({ scale, position, refParent }) => {
    const getHeight = () => {
        if (refParent.current) {
            if (refParent.current.clientWidth * Math.sqrt(2) < refParent.current.clientHeight) {
                const height = (refParent.current.clientWidth / 100) * 85 * Math.sqrt(2);
                return `${height}px`;
            }
            const height = (refParent.current.clientHeight / 100) * 85;
            return `${height}px`;
        }
        return '85%';
    };
    const getWidth = () => {
        if (refParent.current) {
            if (refParent.current.clientWidth * Math.sqrt(2) < refParent.current.clientHeight) {
                const width = (refParent.current.clientWidth / 100) * 85;
                return `${width}px`;
            }
            const width = ((refParent.current.clientHeight / 100) * 85) / Math.sqrt(2);
            return `${width}px`;
        }
        return '85%';
    };

    const refContainer = useRef<HTMLDivElement | null>(null);
    const refSheet = useRef<HTMLDivElement | null>(null);
    const [size, setSize] = useState({ width: getWidth(), height: getHeight() });
    const [scaleSheet, setScaleSheet] = useState(100);

    const getScaleSheet = () => {
        if (!refContainer.current) return;
        if (!refSheet.current) return;

        const containerWidth = refContainer.current.clientWidth;
        const sheetWidth = refSheet.current.clientWidth;
        const scale = (containerWidth / sheetWidth) * 100;
        setScaleSheet(scale);
    };

    useEffect(() => {
        if (!refParent.current) return;

        const observer = new ResizeObserver(() => {
            const width = getWidth();
            const height = getHeight();
            setSize({ width: width, height: height });
            getScaleSheet();
        });

        observer.observe(refParent.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!refParent.current) return;
        getScaleSheet();
    }, [scale, size]);

    return (
        <Container
            ref={refContainer}
            style={{
                scale: `${scale}%`,
                transform: `translate(${position.x}px, ${position.y}px)`,
                height: size.height,
                width: size.width,
            }}
        >
            <Sheet refSheet={refSheet} scale={scaleSheet} />
            <Sheet refSheet={refSheet} scale={scaleSheet} overflowShow={true} />
        </Container>
    );
};

export default ParagraphPlace;
