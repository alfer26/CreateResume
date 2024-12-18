import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../App";
const HardSkills = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLTextAreaElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.hardSkills = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Профессиональные навыки</p>
            <textarea
                placeholder="Владение JavaScript, TypeScript, React, HTML, CSS. Небольшой опыт работы в Phyton и C++."
                onInput={sendData}
            />
        </label>
    );
};

export default HardSkills;
