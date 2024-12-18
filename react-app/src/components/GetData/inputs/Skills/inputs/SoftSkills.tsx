import { FormEvent, useContext } from 'react';
import { DataContext } from '../../../../../App';
const SoftSkills = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLTextAreaElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.softSkills = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Гибкие навыки</p>
            <textarea placeholder="Коммуникабельный, решительный, 2 года опыта работы в команде." onInput={sendData} />
        </label>
    );
};

export default SoftSkills;
