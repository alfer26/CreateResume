import Description from './inputs/Description';
import Email from './inputs/Email';
import FullName from './inputs/FullName';
import PhoneNumber from './inputs/PhoneNumber';
import Photo from './inputs/Photo';
import Profession from './inputs/Profession';

const General = () => {
    return (
        <div>
            <h2>Основное</h2>
            <div>
                <FullName />
                <Photo />
                <Profession />
                <Description />
                <PhoneNumber />
                <Email />
            </div>
        </div>
    );
};

export default General;
