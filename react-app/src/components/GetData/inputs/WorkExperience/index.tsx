import { useContext, useEffect } from 'react';
import WorkPlace from './WorkPlace';
import { DataContext } from '../../../../App';

const WorkExerience = () => {
    const getData = useContext(DataContext)!;

    useEffect(() => {
        const data = { ...getData.data };
        data.workExperience!.push({
            period: {},
        });
        getData.setData(data);
    }, []);
    return (
        <div>
            <h2>Опыт работы</h2>
            <WorkPlace />
        </div>
    );
};

export default WorkExerience;
