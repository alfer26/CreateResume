import { createContext, Dispatch, useState } from "react";
import DataInput from "./components/GetData";
import { Data } from "./Types";
import CreatingResume from "./components/CreatingResume";
import Slider from "./components/Slider";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 12px auto;
    overflow-wrap: anywhere;
    width: 100vw;
    height: 100vh;
    position: relative;
    transition: 0.8s ease;
`;

type ContextType = {
    data: Data;
    setData: Dispatch<React.SetStateAction<Data>>;
};

export const DataContext = createContext<ContextType | null>(null);

const App = () => {
    const [data, setData] = useState<Data>({
        educations: [],
        workExperience: []
    });
    const [hiddenWindow, setHiddenWindow] = useState<
        "none" | "left" | "right"
    >('none');
    function activeLeft() {
        if (hiddenWindow == "left") {
            return "-50vw";
        }
        return "0";
    }

    return (
        <DataContext.Provider value={{ data, setData }}>
            <Container style={{ left: activeLeft() }}>
                <DataInput hiddenWindow={hiddenWindow} />
                <Slider hiddenWindow={hiddenWindow} setHiddenWindow={setHiddenWindow}/>
                <CreatingResume hiddenWindow={hiddenWindow} />
            </Container>
        </DataContext.Provider>
    );
};

export default App;
