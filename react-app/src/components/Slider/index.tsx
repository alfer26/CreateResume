import { Dispatch, FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    z-index: 1;
    background-color: #883005;
    position: relative;
    display: flex;
    align-items: center;
    button {
        position: absolute;
        opacity: 20%;
        width: 20px;
        transition: 0.1s;
    }
    button:hover,
    button:active {
        scale: 105%;
        opacity: 70%;
    }
`;

type Props = {
    hiddenWindow: "none" | "left" | "right";
    setHiddenWindow: Dispatch<React.SetStateAction<"none" | "left" | "right">>;
};

const Slider: FC<Props> = ({ hiddenWindow, setHiddenWindow }) => {
    function handleClick(direction: string) {
        if (direction === "left") {
            if (hiddenWindow === "none") {
                setHiddenWindow('left');
            }
            if (hiddenWindow === "right") {
                setHiddenWindow('none');
            }
        }
        if (direction === "right") {
            if (hiddenWindow === "none") {
                setHiddenWindow('right');
            }
            if (hiddenWindow === "left") {
                setHiddenWindow('none');
            }
        }
    }

    return (
        <Container>
            <button style={{ right: 17 }} onClick={() => handleClick("left")}>
                <svg
                    width="20"
                    viewBox="0 0 16 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13 3L3.08069 37.2216C3.02798 37.4035 3.02798 37.5965 3.08069 37.7784L13 72"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            <button style={{ left: 17 }} onClick={() => handleClick("right")}>
                <svg
                    width="20"
                    viewBox="0 0 16 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 72L12.9193 37.7784C12.972 37.5965 12.972 37.4035 12.9193 37.2216L3 3"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </Container>
    );
};

export default Slider;
