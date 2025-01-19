import { FormEvent, useContext } from 'react';
import { DataContext } from '../../../../../../App';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
    margin-bottom: 0.5vw;

    > label {
        display: flex;
        white-space: nowrap;
        width: 100%;
        flex-direction: row !important;
        align-items: end;
        > p {
            padding: 5px 10px;
            margin: 0 !important;
            flex-grow: 1;
        }
        input {
            width: 100%;
            flex-grow: 1;
            border-radius: 0.8vw;
            padding: 5px 0.6vw;
            border: 1px solid #ffd375;
        }
    }
    @media (width < 1024px) {
        gap: 1vw;
        > label {
            > p {
                padding: 0.5vw 1vw;
            }
        }
    }
`;

const Period = () => {
    const getData = useContext(DataContext)!;

    function sendDataFrom(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.workExperience![0].period.from = value;
        getData.setData(data);
    }

    function sendDataTo(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.workExperience![0].period.to = value;
        getData.setData(data);
    }
    return (
        <div className="periodInput">
            <p>Период работы</p>
            <Container>
                <label>
                    <p>с</p>
                    <input name="from" type="text" placeholder="17.09.2022" onInput={sendDataFrom} />
                </label>
                <label>
                    <p>по</p>
                    <input name="to" type="text" placeholder="26.10.2024" onInput={sendDataTo} />
                </label>
            </Container>
        </div>
    );
};

export default Period;
