import { useContext, useEffect } from "react";
import Degree from "./inputs/Degree";
import Specialization from "./inputs/Specialization";
import Title from "./inputs/Title";
import { DataContext } from "../../../../../App";

const Education = () => {
    const getData = useContext(DataContext)!;

    useEffect(() => {
        const data = { ...getData.data };
        data.educations!.push({});
        getData.setData(data);
    }, [])
    return (
        <div>
            <Title />
            <Specialization />
            <Degree />
        </div>
    )
}

export default Education;
