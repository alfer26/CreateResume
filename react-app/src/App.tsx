import { createContext, Dispatch, useLayoutEffect, useState } from 'react';
import DataInput from './components/GetData';
import { Data } from './Types';
import CreatingResume from './components/CreatingResume';
import Slider from './components/Slider';
import styled from 'styled-components';
import PreRender from './components/PreRender';
import MyPhoto from './myPhoto.png';

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 0 auto;
    overflow-wrap: anywhere;
    width: 100vw;
    height: 100vh;
    position: relative;
    transition:
        left 0.7s ease,
        opacity 1s ease;
`;

type ContextType = {
    data: Data;
    setData: Dispatch<React.SetStateAction<Data>>;
};

export const DataContext = createContext<ContextType | null>(null);

const App = () => {
    const [data, setData] = useState<Data>({
        description:
            'Опытный frontend-разработчик с более чем 3-летним опытом в разработке веб-приложений, стремящийся к новым вызовам в динамичной компании.',
        email: 'example@email.com',
        fullName: 'Иванов Иван Иванович',
        photo: {
            fileName: 'sdggds.dsf',
            fileUrl: MyPhoto,
        },
        hardSkills: 'Владение JavaScript, TypeScript, React, HTML, CSS. Небольшой опыт работы в Phyton и C++.',
        phoneNumber: '+7 (012) 345-67-89',
        profession: 'Frontend-разработчик',
        softSkills: 'Коммуникабельный, решительный, 2 года опыта работы в команде.',
        educations: [],
        workExperience: [],
        designOption: 's1',
    });
    const [showPreRender, setShowPreRender] = useState(false);
    const [hiddenWindow, setHiddenWindow] = useState<'none' | 'left' | 'right'>('none');
    const [opacity, setOpacity] = useState<number>(0);
    function activeLeft() {
        if (hiddenWindow == 'left') {
            return '-50vw';
        }
        return '0';
    }

    useLayoutEffect(() => {
        setOpacity(1);
    });

    return (
        <DataContext.Provider value={{ data, setData }}>
            <Container style={{ left: activeLeft(), opacity: opacity }}>
                <DataInput hiddenWindow={hiddenWindow} setShowPreRender={setShowPreRender} />
                <Slider hiddenWindow={hiddenWindow} setHiddenWindow={setHiddenWindow} />
                <CreatingResume hiddenWindow={hiddenWindow} />
                {showPreRender && <PreRender setShowPreRender={setShowPreRender} showPreRender={showPreRender} />}
            </Container>
        </DataContext.Provider>
    );
};

export default App;
