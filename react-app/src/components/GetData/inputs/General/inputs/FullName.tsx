import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../App";

const FullName = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.fullName = value;
        getData.setData(data);
    }

    return (
        <label>
            <p>ФИО</p>
            <input
                placeholder="Иванов Иван Иванович"
                onInput={sendData}
            />
        </label>
    );
};

export default FullName;
