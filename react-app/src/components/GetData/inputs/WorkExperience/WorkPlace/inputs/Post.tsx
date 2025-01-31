import { FormEvent, useContext } from "react";
import { DataContext } from "../../../../../../App";
const Post = () => {
    const getData = useContext(DataContext)!;

    function sendData(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const data = { ...getData.data };
        data.workExperience![0].post = value;
        getData.setData(data);
    }
    return (
        <label>
            <p>Должность</p>
            <input
                type="text"
                placeholder="Senior frontend-разработчик"
                onInput={sendData}
            />
        </label>
    );
};

export default Post;
