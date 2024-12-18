import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../../App";
const Title = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.educations![0].title = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Название учебного заведения</p>
            <input placeholder="МФТИ" onInput={sendData} />
        </label>
    );
};

export default Title;
