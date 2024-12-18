import { FC } from 'react';
import Educations from './inputs/Educations';
import General from './inputs/General';
import Skills from './inputs/Skills';
import WorkExperience from './inputs/WorkExperience';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: #f59300;
    overflow: auto;
    transition: 0.8s ease;

    & div,
    input,
    textarea {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        margin: 10px;
    }
    textarea {
        resize: none;
        field-sizing: content;
    }
    label {
        display: flex;
        flex-direction: column;
    }
    input,
    textarea {
        flex-grow: 1;
    }
`;

const Button = styled.button`
    background-color: #EC8E00;
    padding: 10px;
    border: 3px solid #883005;
    border-radius: 10px;
`;

type Props = {
    hiddenWindow: 'none' | 'left' | 'right';
};

const DataInput: FC<Props> = ({ hiddenWindow }) => {
    const widthValue = () => {
        if (hiddenWindow == 'right') {
            return 'calc(100vw - 6px)';
        }
        return 'calc(50vw - 6px)';
    };
    return (
        <Container style={{ width: widthValue() }}>
            <General />
            <Skills />
            <Educations />
            <WorkExperience />
            <Button>Создать резюме</Button>
        </Container>
    );
};

export default DataInput;
