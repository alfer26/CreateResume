import { useContext } from "react";
import { Data } from "../../../../../App";

const FullName = () => {
    const data = useContext(Data) // ?
    return (
        <label>
            <p>ФИО</p>
            <input type="text" placeholder="Иванов Иван Иванович" />
        </label>
    );
};

export default FullName;
