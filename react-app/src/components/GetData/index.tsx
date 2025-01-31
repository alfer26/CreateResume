import { Dispatch, FC } from 'react';
import Educations from './inputs/Educations';
import General from './inputs/General';
import Skills from './inputs/Skills';
import WorkExperience from './inputs/WorkExperience';
import styled from 'styled-components';
import DesignOption from './inputs/DesignOption';

const Container = styled.div`
    ::placeholder {
        color: #ffffff7c;
    }
    transition: width 0.7s ease;
    overflow: auto;
    > div {
        display: flex;
        background-color: white;
        flex-direction: column;
        gap: 40px;
        padding: 40px 46px 40px 40px;
        > div {
            display: flex;
            flex-direction: column;
            gap: 30px;
            border-radius: 30px;
            background-color: #ffeccf;
            backdrop-filter: blur(4px);
            border: 2px solid #2b2b2b;
            box-shadow: 0 0 0.8vw black;
            padding: 30px;
            > div {
                text-shadow: 0 0 6px black;
                border-radius: 15px;
                padding: 30px;
                box-shadow: 0 0 0.5vw black;
                background-color: rgba(51, 51, 51, 0.92);
                > label {
                    margin-bottom: 10px;
                    &:last-of-type {
                        margin-bottom: 5px;
                    }
                    display: flex;
                    flex-direction: column;
                    > input,
                    > textarea {
                        border-radius: 12px;
                        padding: 5px 10px;
                        border: 1px solid #ffd375;
                    }
                    > textarea {
                        resize: none;
                        field-sizing: content;
                    }
                }
            }
        }
        > div:not(.designOption) {
            color: #ffffff;
            h2 {
                color: #000000;
                text-align: center;
                font-size: 1.3em;
                font-weight: 600;
                text-transform: uppercase;
            }
            p {
                margin: 3px 10px;
            }
        }
    }
    .designOption {
        > h2 {
            color: #000000;
            text-align: center;
            font-size: 1.3em;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
    @media (width < 1440px) {
        font-size: 1.5vw;
        > div {
            gap: 3vw;
            padding: 3vw;
            background-size: 37vw;
            > div {
                gap: 2vw;
                border-radius: 2vw;
                padding: 2vw;
                > div {
                    border-radius: 1vw;
                    padding: 2vw;
                    > label {
                        margin-bottom: 1vw;
                        & input,
                        textarea {
                            border-radius: 0.8vw;
                            padding: 5px 0.6vw;
                        }
                    }
                }
            }
            > div:not(.periodInput) > div {
                & > label:last-of-type {
                    margin-bottom: 0.5vw;
                }
            }
        }
        > div:not(.designOption) {
            p {
                margin: 3px 10px;
            }
        }
    }
    @media (width < 1024px) {
        font-size: 2vw;
        > div {
            &:first-of-type {
                padding: 3vw 3.5vw 3vw 3vw;
            }
            > div {
                border: 1px solid #2b2b2b;
            }
        }
    }
    @media (width < 480px) {
        > div {
            &:first-of-type {
                padding: 3.2vw 4vw 3.2vw 3.2vw;
            }
        }
    }
`;

const Button = styled.button`
    border-radius: 30px;
    color: white;
    background-color: rgba(51, 51, 51, 0.92);
    backdrop-filter: blur(4px);
    padding: 15px 20px;
    border: 2px solid #2b2b2b;
    transition: background-color 0.1s;
    &:hover {
        background-color: rgba(70, 70, 70, 0.92);
    }
    @media (width < 1440px) {
        border-radius: 2vw;
        padding: 1.4vw 2vw;
    }
`;

type Props = {
    hiddenWindow: 'none' | 'left' | 'right';
    setShowPreRender: Dispatch<React.SetStateAction<boolean>>;
};

const DataInput: FC<Props> = ({ hiddenWindow, setShowPreRender }) => {
    const widthValue = () => {
        if (hiddenWindow == 'right') {
            return 'calc(100vw)';
        }
        return 'calc(50vw)';
    };
    return (
        <Container style={{ width: widthValue() }}>
            <div>
                <General />
                <Skills />
                <Educations />
                <WorkExperience />
                <DesignOption />
                <Button
                    onClick={() => {
                        if (hiddenWindow !== 'left') setShowPreRender(true);
                    }}
                >
                    Создать резюме
                </Button>
            </div>
        </Container>
    );
};

export default DataInput;
