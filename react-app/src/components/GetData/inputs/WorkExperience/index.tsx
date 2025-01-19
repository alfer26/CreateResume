import { useContext, useEffect } from 'react';
import WorkPlace from './WorkPlace';
import { DataContext } from '../../../../App';

const WorkExerience = () => {
    const getData = useContext(DataContext)!;

    useEffect(() => {
        const data = { ...getData.data };
        data.workExperience!.push({
            period: {
                from: '17.09.2022',
                to: '26.10.2024',
            },
            achievements: 'Сотрудник года. Поднял доход компании на 20%, путём регулярного обновления действующих веб-сервисов компании.',
            post: 'Senior frontend-разработчик',
            title: 'Яндекс',
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
