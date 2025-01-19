import styled from 'styled-components';
import Sheet from '../../../Sheet';
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { DataContext } from '../../../../App';

const Container = styled.div`
    overflow: hidden;
    width: 100%;
    > div {
        overflow: auto;
        > div {
            height: 20vw;
            gap: 1vw;
            width: max-content;
            display: flex;
        }
    }
    button {
        transition: scale  0.1s, filter  0.1s;
        &:hover{scale: 1.05;
        filter: brightness(1.1);}
    }
`;

const Button = styled.button`
    box-shadow: 0 0 5px #00000095;
    height: 100%;
    aspect-ratio: 210 / 297;
    text-align: unset;
    overflow: hidden;
`;

const DesignOption = () => {
    const getData = useContext(DataContext)!;

    const refSheet = useRef<HTMLDivElement | null>(null);
    const refScroll = useRef<HTMLDivElement | null>(null);
    const refButton = useRef<HTMLButtonElement | null>(null);
    const [scaleSheet, setScaleSheet] = useState(100);

    const getScaleSheet = () => {
        if (!refButton.current) return;
        if (!refSheet.current) return;

        const containerWidth = refButton.current.clientWidth;
        const containerHeight = refButton.current.clientHeight;
        const sheetWidth = refSheet.current.clientWidth;
        const sheetHeight = refSheet.current.clientHeight;

        if (containerWidth / containerHeight < sheetWidth / sheetHeight) {
            const scale = (containerWidth / sheetWidth) * 100;
            setScaleSheet(scale);
        } else {
            const scale = (containerHeight / sheetHeight) * 100;
            setScaleSheet(scale);
        }
    };

    const handleClick = (styleName: string) => {
        const data = { ...getData.data };
        data.designOption = styleName;
        getData.setData(data);
    };

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (!refScroll.current) return;
        refScroll.current.scrollLeft += e.deltaY / 2;
    };

    useEffect(() => {
        if (!refButton.current) return;

        const observer = new ResizeObserver(() => {
            getScaleSheet();
        });

        observer.observe(refButton.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useLayoutEffect(() => {
        if (!refScroll.current) return;
        refScroll.current.addEventListener('wheel', handleWheel);
        return () => {
            if (!refScroll.current) return;

            refScroll.current.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <Container className="designOption">
            <h2>Выбор дизайна</h2>
            <div ref={refScroll}>
                <div>
                    <Button ref={refButton} onClick={() => handleClick('s')}>
                        <Sheet refSheet={refSheet} scale={scaleSheet} styleName={'s'} />
                    </Button>
                    <Button ref={refButton} onClick={() => handleClick('s0')}>
                        <Sheet refSheet={refSheet} scale={scaleSheet} styleName={'s0'} />
                    </Button>
                    <Button ref={refButton} onClick={() => handleClick('s1')}>
                        <Sheet refSheet={refSheet} scale={scaleSheet} styleName={'s1'} />
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default DesignOption;
