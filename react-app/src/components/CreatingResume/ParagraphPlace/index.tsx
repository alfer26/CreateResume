import { FC, useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../../App';
import Paragraph from './Paragraph';
import styled from 'styled-components';
import { Position } from '../../../Types';
import generatePDF, { Resolution, Margin, Options } from 'react-to-pdf';

const optionsForPDF: Options = {
    filename: 'Resume.pdf',
    // default is `save`
    method: 'save',
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.MEDIUM,
    page: {
        // margin is in MM, default is Margin.NONE = 0
        margin: 0,
        // default is 'A4'
        format: 'A4',
        // default is 'portrait'
        orientation: 'portrait',
    },
    canvas: {
        // default is 'image/jpeg' for better size performance
        mimeType: 'image/png',
        qualityRatio: 1,
    },
    // customize any value passed to the jsPDF instance and html2canvas
    // function
    overrides: {
        // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
        pdf: {
            unit: 'px',
            hotfixes: ['px_scaling']
        },
        // see https://html2canvas.hertzen.com/configuration for more options
        canvas: {
            scale: 2,
            useCORS: true,
        },
    },
};

const toPDF = () => {
    const componentToPDF = document.getElementById('toPDF');
    if (componentToPDF) {
        console.log(componentToPDF.style.width);
        console.log(componentToPDF.style.height);

        // componentToPDF.style.width = `${componentToPDF.clientWidth * 2}px`;
        // // componentToPDF.style.height = `${componentToPDF.clientHeight * 2}px`;
        console.log(componentToPDF.style.width);
        console.log(componentToPDF.style.height);
    }
    generatePDF(() => componentToPDF, optionsForPDF);
};

const Container = styled.div`
    margin: auto;
    background-color: #853d3d;
    transition: 0.1s linear;
    display: grid;
`;

type Props = {
    scale: number;
    position: Position;
    refParent: React.MutableRefObject<HTMLDivElement | null>;
};

const ParagraphPlace: FC<Props> = ({ scale, position, refParent }) => {
    const getHeight = () => {
        if (refParent.current) {
            if (refParent.current.clientWidth * Math.sqrt(2) < refParent.current.clientHeight) {
                const height = (refParent.current.clientWidth / 100) * 90 * Math.sqrt(2);
                return `${height}px`;
            }
            const height = (refParent.current.clientHeight / 100) * 90;
            return `${height}px`;
        }
        return '90%';
    };
    const getWidth = () => {
        if (refParent.current) {
            if (refParent.current.clientWidth * Math.sqrt(2) < refParent.current.clientHeight) {
                const width = (refParent.current.clientWidth / 100) * 90;
                return `${width}px`;
            }
            const width = ((refParent.current.clientHeight / 100) * 90) / Math.sqrt(2);
            return `${width}px`;
        }
        return '90%';
    };

    const dataUpdate = useContext(DataContext);
    const refContainer = useRef<HTMLDivElement | null>(null);
    const [size, setSize] = useState({ width: getWidth(), height: getHeight() });

    useEffect(() => {
        if (!refParent.current) return;

        const observer = new ResizeObserver(() => {
            const width = getWidth();
            const height = getHeight();
            setSize({ width: width, height: height });
        });

        observer.observe(refParent.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Container
            id="toPDF"
            ref={refContainer}
            style={{ scale: `${scale}%`, transform: `translate(${position.x}px, ${position.y}px)`, height: size.height, width: size.width }}
        >
            {dataUpdate?.data.fullName && <Paragraph value={dataUpdate.data.fullName} />}
            {dataUpdate?.data.profession && <Paragraph value={dataUpdate.data.profession} />}
            {dataUpdate?.data.description && <Paragraph value={dataUpdate.data.description} />}
            {dataUpdate?.data.phoneNumber && <Paragraph value={dataUpdate.data.phoneNumber} />}
            {dataUpdate?.data.email && <Paragraph value={dataUpdate.data.email} />}
            {dataUpdate?.data.hardSkills && <Paragraph value={dataUpdate.data.hardSkills} />}
            {dataUpdate?.data.softSkills && <Paragraph value={dataUpdate.data.softSkills} />}
            {dataUpdate?.data.educations.map((education, key) => (
                <div key={key}>
                    {education.title && <Paragraph value={education.title} />}
                    {education.specialization && <Paragraph value={education.specialization} />}
                    {education.degree && <Paragraph value={education.degree} />}
                </div>
            ))}
            {dataUpdate?.data.workExperience.map((workPlace, key) => (
                <div key={key}>
                    {workPlace.title && <Paragraph value={workPlace.title} />}
                    {workPlace.post && <Paragraph value={workPlace.post} />}
                    {workPlace.period && <Paragraph value={workPlace.period} />}
                    {workPlace.achievements && <Paragraph value={workPlace.achievements} />}
                </div>
            ))}
            <button onClick={toPDF}>toPDF</button>
        </Container>
    );
};

export default ParagraphPlace;
