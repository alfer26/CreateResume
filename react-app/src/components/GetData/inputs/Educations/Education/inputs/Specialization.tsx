import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../../App";
const Specialization = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.educations![0].specialization = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Специальность</p>
            <input type="text" placeholder="Программист" onInput={sendData} />
        </label>
    );
};

export default Specialization;
