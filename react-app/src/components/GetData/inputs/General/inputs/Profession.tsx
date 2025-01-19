import { FormEvent, useContext } from 'react';
import { DataContext } from '../../../../../App';

const Profession = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.profession = value;
        getData.setData(data);
    }

    return (
        <label>
            <p>Профессия</p>
            <input placeholder="Frontend-разработчик" onInput={sendData} />
        </label>
    );
};

export default Profession;
