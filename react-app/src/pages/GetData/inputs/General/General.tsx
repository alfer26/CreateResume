import Description from "./inputs/Description";
import Email from "./inputs/Email";
import FullName from "./inputs/FullName";
import PhoneNumber from "./inputs/PhoneNumber";
import Profession from "./inputs/Profession";

const General = () => {
    return (
        <div>
            <FullName />
            <PhoneNumber />
            <Email />
            <Description />
            <Profession />
        </div>
    )
}

export default General;