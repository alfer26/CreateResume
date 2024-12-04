import Education from "./inputs/Education/Education";
import General from "./inputs/General/General";
import Skills from "./inputs/Skills/Skills";
import WorkExerience from "./inputs/WorkExperience/WorkExperience";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50vw;

    & div,
    input,
    textarea {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        margin: 10px;
    }
    textarea {
        resize: none;
        field-sizing: content;
    }
    label {
        display: flex;
        flex-direction: column;
    }
    input,
    textarea {
        flex-grow: 1;
    }
`;

const DataInput = () => {
    return (
        <Container>
            <General />
            <Skills />
            <Education />
            <WorkExerience />
        </Container>
    );
};

export default DataInput;
