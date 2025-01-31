import { FormEvent, useContext } from 'react';
import { DataContext } from '../../../../../../App';
const Degree = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.educations![0].degree = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Уровень образования</p>
            <input type="text" placeholder="Бакалавр" onInput={sendData} />
        </label>
    );
};

export default Degree;
