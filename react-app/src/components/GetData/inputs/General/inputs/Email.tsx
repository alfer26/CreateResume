import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../App";
const Email = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.email = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Электронная почта</p>
            <input
                placeholder="example@email.com"
                onInput={sendData}
            />
        </label>
    );
};

export default Email;
