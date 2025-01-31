import { FormEvent, useContext } from 'react';
import { DataContext } from '../../../../../App';
const Description = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLTextAreaElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.description = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Краткое описание себя</p>
            <textarea
                placeholder="Frontend-разработчик с более чем 3-летним опытом в разработке веб-приложений, стремящийся к новым вызовам в динамичной компании."
                onInput={sendData}
            ></textarea>
        </label>
    );
};

export default Description;
