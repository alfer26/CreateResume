import { FormEvent, useContext, useRef } from 'react';
import { DataContext } from '../../../../../App';
import cancel from '../../../../../images/cancel.svg';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4px;
    p {
        cursor: pointer;
        border-radius: 12px;
        padding: 5px 10px;
        border: 1px solid #ffd375;
        margin: 0 !important;
    }
    input {
        display: none;
    }
    button {
        border-radius: 12px;
        border: 1px solid #ffd375;
        transition:
            scale 0.1s,
            filter 0.1s;
        display: flex;
        transition: background-color 0.1s;
        aspect-ratio: 1 / 1;
        &:hover {
            background-color: rgba(255, 255, 255, 0.07);
        }
        img {
            height: 50%;
            margin: auto;
        }
    }
    @media (width < 1440px) {
        button,
        p {
            border-radius: 0.8vw;
        }
    }
    @media (width < 1024px) {
        p {
            padding: 5px 0.6vw;
        }
    }
`;
const Photo = () => {
    const getData = useContext(DataContext)!;
    const refInput = useRef<null | HTMLInputElement>(null);

    const sendData = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const file = target.files ? target.files[0] : null;
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const data = { ...getData.data };
            data.photo = { fileName: file.name, fileUrl: imageUrl };
            getData.setData(data);
        }
    };
    const deleteData = () => {
        const data = { ...getData.data };
        data.photo = undefined;
        getData.setData(data);
        if (!refInput.current) return;
        refInput.current.value = '';
    };
    return (
        <label>
            <p>Фото</p>
            <Container>
                {getData.data.photo ? <p>{getData.data.photo.fileName}</p> : <p>Выберите файл</p>}
                <input type="file" accept="image/*" onInput={sendData} ref={refInput} />
                <button onClick={deleteData}>
                    <img src={cancel} alt="" />
                </button>
            </Container>
        </label>
    );
};

export default Photo;
