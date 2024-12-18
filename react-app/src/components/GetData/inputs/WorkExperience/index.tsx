import { useContext, useEffect } from 'react';
import WorkPlace from './WorkPlace';
import { DataContext } from '../../../../App';

const WorkExerience = () => {
    const getData = useContext(DataContext)!;

    useEffect(() => {
        const data = { ...getData.data };
        data.workExperience!.push({});
        getData.setData(data);
    }, []);
    return (
        <div>
            <WorkPlace />
        </div>
    );
};

export default WorkExerience;
