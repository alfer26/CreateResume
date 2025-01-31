import { FormEvent, useContext } from 'react';
import { DataContext } from '../../../../../../App';
const Title = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.workExperience![0].title = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Название компании</p>
            <input type="text" placeholder="Яндекс" onInput={sendData} />
        </label>
    );
};

export default Title;
