import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../App";
const PhoneNumber = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.phoneNumber = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Номер телефона</p>
            <input
                placeholder="+7 (012) 345-67-89"
                onInput={sendData}
            />
        </label>
    );
};

export default PhoneNumber;
