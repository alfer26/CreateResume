import { FormEvent, useContext } from 'react';
import { DataContext } from '../../../../../../App';
const Dates = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.workExperience![0].period = value;
        getData.setData(data);
    }
    return (
        <div>
            <p>Период работы</p>
            <label>
                <p>с</p>
                <input name="from" type="text" placeholder="17.09.2022" onInput={sendData} />
            </label>
            <label>
                <p>по</p>
                <input name="to" type="text" placeholder="26.10.2024" onInput={sendData} />
            </label>
        </div>
    );
};

export default Dates;
