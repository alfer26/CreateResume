import { Dispatch, FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Sheet from '../Sheet';
import close from '../../images/cancel.svg';

const Background = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    width: 100vw;
    height: 100vh;
    transition: 0.2s;
    z-index: 1;
    display: flex;
`;

const Container = styled.div`
    position: relative;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
    margin: auto;
    width: 90vw;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 30px;
    background-color: #ffffff;
    border: 2px solid #2b2b2b;
    padding: 30px;
`;

const PlaceSheet = styled.div`
    margin: auto;
`;

const Сonfiguration = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    gap: 10px;
    @media (width < 1440px) {
        font-size: 1.5vw;
    }
    @media (width < 1024px) {
        font-size: 2vw;
    }
`;

const QualityChoice = styled.div`
    h2 {
        color: #000000;
        text-align: center;
        margin-bottom: 4px;
        font-size: 1.3em;
        font-weight: 600;
        text-transform: uppercase;
    }
    border-radius: 15px;
    padding: 20px 30px 30px;
    background-color: #ffeccf;
    border-radius: 30px;
    border: 2px solid #2b2b2b;
    box-shadow: 0 0 0.5vw black;
    div {
        width: 100%;
        border-radius: 37px;
        padding: 7px;
        text-shadow: 0 0 6px black;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    @media (width < 1440px) {
        font-size: 1.5vw;
        padding: 1.6vw 2vw 2vw;
        div {
            padding: 0.6vw;
        }
        border-radius: 2vw;
        padding: 1vw 2vw;
    }
    @media (width < 1024px) {
        font-size: 2vw;
    }
`;

const Button = styled.button`
    background-color: rgba(51, 51, 51, 0.92);
    flex-grow: 1;
    border-radius: 12px;
    padding: 10px;
    transition: background-color 0.1s;
    box-shadow: 0 0 0.5vw black;
    &:hover {
        background-color: rgba(70, 70, 70, 0.92);
    }
    &:disabled {
        background-color: rgba(51, 51, 51, 0.7);
    }
    @media (width < 1440px) {
        border-radius: 1vw;
        padding: 1vw 2vw;
    }
`;

const ButtonClose = styled.button`
    position: absolute;
    filter: invert(0.8);
    transition: scale 0.1s;
    top: 25px;
    right: 25px;
    width: 25px;
    height: 25px;
    @media (width < 1440px) {
        top: calc(10px + 1.5vw);
        right: calc(10px + 1.5vw);
        width: calc(10px + 1.5vw);
        height: calc(10px + 1.5vw);
    }
    &:hover {
        scale: 1.1;
    }
`;

const ButtonExport = styled.button`
    border-radius: 30px;
    background-color: rgba(51, 51, 51, 0.92);
    backdrop-filter: blur(4px);
    padding: 10px 20px;
    transition: background-color 0.1s;
    border: 2px solid #2b2b2b;
    &:hover {
        background-color: rgba(70, 70, 70, 0.92);
    }
    @media (width < 1440px) {
        border-radius: 2vw;
        padding: 1vw 2vw;
    }
`;

type Props = {
    showPreRender: boolean;
    setShowPreRender: Dispatch<React.SetStateAction<boolean>>;
};

const PreRender: FC<Props> = ({ setShowPreRender }) => {
    const getHeight = () => {
        if (refParagraphPlace.current) {
            if (refParagraphPlace.current.clientWidth * Math.sqrt(2) < refParagraphPlace.current.clientHeight) {
                const height = (refParagraphPlace.current.clientWidth / 100) * 90 * Math.sqrt(2);
                return `${height}px`;
            }
            const height = (refParagraphPlace.current.clientHeight / 100) * 90;
            return `${height}px`;
        }
        return '90%';
    };
    const getWidth = () => {
        if (refParagraphPlace.current) {
            if (refParagraphPlace.current.clientWidth * Math.sqrt(2) < refParagraphPlace.current.clientHeight) {
                const width = (refParagraphPlace.current.clientWidth / 100) * 90;
                return `${width}px`;
            }
            const width = ((refParagraphPlace.current.clientHeight / 100) * 90) / Math.sqrt(2);
            return `${width}px`;
        }
        return '90%';
    };

    const [scaleSheet, setScaleSheet] = useState(100);
    const [display, setDisplay] = useState(0);
    const refPlaceSheet = useRef<HTMLDivElement | null>(null);
    const [quality, setQuality] = useState(1500);
    const refSheet = useRef<HTMLDivElement | null>(null);
    const refBackground = useRef<HTMLDivElement | null>(null);
    const refParagraphPlace = useRef<HTMLDivElement | null>(null);
    const [size, setSize] = useState({ width: getWidth(), height: getHeight() });

    const generatePdf = () => {
        setTimeout(async () => {
            if (!refSheet.current) return;
            const componentWidth = refSheet.current.clientWidth;
            const componentHeight = refSheet.current.clientHeight;
            const orientation = componentWidth > componentHeight ? 'l' : 'p';
            const pdf = new jsPDF({
                orientation: orientation,
                unit: 'mm',
                format: 'a4',
                compress: false,
            });
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const scale = quality / Math.min(componentWidth, componentHeight);
            const canvas = await html2canvas(refSheet.current, {
                scale: scale,
                useCORS: true,
                logging: true,
                allowTaint: true,
            });
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('Resume.pdf');
        }, 1);
    };

    const getScaleSheet = () => {
        if (!refPlaceSheet.current) return;
        if (!refSheet.current) return;
        const containerWidth = refPlaceSheet.current.clientWidth;
        const sheetWidth = refSheet.current.clientWidth;
        const scale = (containerWidth / sheetWidth) * 100;
        setScaleSheet(scale);
    };

    const closeWindow = () => {
        setDisplay(0);
        setTimeout(() => {
            setShowPreRender(false);
        }, 200);
    };

    useEffect(() => {
        setDisplay(1);

        if (!refParagraphPlace.current) return;

        const observer = new ResizeObserver(() => {
            const width = getWidth();
            const height = getHeight();
            setSize({ width: width, height: height });
            getScaleSheet();
        });

        observer.observe(refParagraphPlace.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!refParagraphPlace.current) return;
        getScaleSheet();
    }, [size]);

    return (
        <Background ref={refBackground} onClick={closeWindow} style={{ opacity: display }}>
            <Container
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div ref={refParagraphPlace} style={{ display: 'flex' }}>
                    <PlaceSheet ref={refPlaceSheet} style={{ height: size.height, width: size.width }}>
                        <Sheet refSheet={refSheet} scale={scaleSheet} />
                        <div style={{ opacity: 0 }}>
                            <Sheet refSheet={refSheet} render={true} />
                        </div>
                    </PlaceSheet>
                </div>
                <Сonfiguration>
                    <QualityChoice>
                        <h2>Качество</h2>
                        <div>
                            <Button disabled={quality === 700} onClick={() => setQuality(700)}>
                                Низкое
                            </Button>
                            <Button disabled={quality === 1500} onClick={() => setQuality(1500)}>
                                Среднее
                            </Button>
                            <Button disabled={quality === 2200} onClick={() => setQuality(2200)}>
                                Высокое
                            </Button>
                        </div>
                    </QualityChoice>
                    <ButtonExport onClick={generatePdf}>Экспортировать</ButtonExport>
                </Сonfiguration>
                <ButtonClose onClick={closeWindow}>
                    <img src={close} alt="" />
                </ButtonClose>
            </Container>
        </Background>
    );
};

export default PreRender;
