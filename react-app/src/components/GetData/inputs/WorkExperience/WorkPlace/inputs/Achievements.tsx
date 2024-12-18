import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../../App";
const Achievements = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLTextAreaElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.workExperience![0].achievements = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Заслуги и достижения в компании</p>
            <textarea
                placeholder="Сотрудник года. Поднял доход компании на 20%, путём регулярного обновления действующих веб-сервисов компании."
                onInput={sendData}
            ></textarea>
        </label>
    );
};

export default Achievements;
