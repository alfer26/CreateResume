import { FC, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Element from '../CreatingResume/ParagraphPlace/Element';
import Element2 from '../CreatingResume/ParagraphPlace/Element2';
import PhoneIcon from '../../images/PhoneIcon';
import EmailIcon from '../../images/EmailIcon';
import { DataContext } from '../../App';

const Container = styled.div`
    font-size: 1.2rem;
    svg {
        width: auto;
        height: auto;
    }
    white-space: break-spaces;
    overflow-wrap: anywhere;
    & > div {
        .phoneNumber svg,
        .email svg {
            display: none;
        }

        background-color: white;
        transform-origin: left top;
        width: 210mm;
        height: 297mm;
        box-shadow: 0 0 30px hsla(0, 0%, 0%, 0.1);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            'photo fullName'
            'photo profession'
            'contacts contacts'
            'description educations'
            'skills workExperience';
        & .photo div {
            aspect-ratio: 1 / 1;
        }
        h2 {
            font-weight: 600;
            font-size: 1.2em;
        }
        & {
            .fullName {
                grid-area: fullName;
            }
            .photo {
                grid-area: photo;
            }
            .description {
                grid-area: description;
            }
            .profession {
                grid-area: profession;
            }
            .contacts {
                grid-area: contacts;
                .phoneNumber {
                    grid-area: phoneNumber;
                }
                .email {
                    grid-area: email;
                }
            }
            .skills {
                grid-area: skills;
                .hardSkills {
                    grid-area: hardSkills;
                }
                .softSkills {
                    grid-area: softSkills;
                }
            }
            .educations {
                grid-area: educations;
                .education {
                    grid-area: education;
                    .titleEducation {
                        grid-area: titleEducation;
                    }
                    .specialization {
                        grid-area: specialization;
                    }
                    .degree {
                        grid-area: degree;
                    }
                }
            }
            .workExperience {
                grid-area: workExperience;
                .workPlace {
                    grid-area: workPlace;
                    .titleWorkPlace {
                        grid-area: titleWorkPlace;
                    }
                    .post {
                        grid-area: post;
                    }
                    .period {
                        grid-area: period;
                        .from {
                            grid-area: from;
                        }
                        .to {
                            grid-area: to;
                        }
                    }
                    .achievements {
                        grid-area: achievements;
                    }
                }
            }
        }
    }
    & > div.s0 {
        padding: 50px;
        grid-template-columns: 1fr 1.3fr;
        grid-template-rows: min-content min-content min-content min-content auto;
        grid-template-areas:
            'photo fullName'
            'photo profession'
            'contacts contacts'
            'description educations'
            'description workExperience'
            'skills workExperience'
            'skills workExperience';
        & > div {
            position: relative;
            padding: 4px;
        }
        h2 {
            line-height: 2.1em;
            font-size: 1.3em;
        }
        .photo {
            margin: 0 98px 0 -51px;
            background-color: #f1c86d;
            display: flex;
            justify-content: end;
            align-items: center;
            padding: 30px 10px;
            div {
                border-radius: 1000px;
                width: 75%;
            }
        }
        .fullName {
            margin: 0 -51px -2px -100px;
            background-color: #f1c86d;
            display: flex;
            justify-content: start;
            align-items: end;
            padding: 0 50px 0 15px;
            font-weight: 600;
            font-size: 2em;
        }
        .profession {
            margin: 0 -51px 0 -100px;
            background-color: #f1c86d;
            display: flex;
            align-items: start;
            padding: 0 50px 0 15px;
            font-size: 1.3em;
            justify-content: start;
        }
        .contacts {
            display: flex;
            background-color: #f1c86d;
            margin: 30px -51px 30px -51px;
            padding: 8px 50px;
            justify-content: space-around;
            z-index: 1;
            h2 {
                display: none;
            }
            .phoneNumber,
            .email {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
            }
            .phoneNumber svg,
            .email svg {
                display: block;
                margin: 1px;
                height: 33px;
                aspect-ratio: 1 / 1;
            }
        }
        .educations {
            margin: -52px -61px 0 0;
            padding: 52px 51px 20px 40px;
            background-color: #e4e4e4;
            .education {
                display: grid;
                row-gap: 2px;
                grid-template-areas:
                    'titleEducation titleEducation'
                    'specialization degree';
                .titleEducation {
                    font-size: 1.1em;
                    font-weight: 500;
                }
            }
        }
        .workExperience {
            margin: -2px -51px -51px 0;
            padding: 12px 51px 51px 40px;
            background-color: #e4e4e4;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                background-color: black;
                margin: 0 -10px;
                width: calc(100% - 70px);
                height: 3px;
            }
            .workPlace {
                display: grid;
                column-gap: 10px;
                grid-template-areas:
                    'titleWorkPlace period period'
                    'post post post'
                    'achievements achievements achievements';
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    bottom: -25px;
                    background-color: black;
                    margin: 0 -10px;
                    width: calc(100% + 20px);
                    height: 3px;
                }
                .titleWorkPlace {
                    margin: 0 0 5px 0;
                    font-size: 1.3em;
                    font-weight: 500;
                }
                h2 {
                    font-size: 1.1em;
                    font-weight: 500;
                    line-height: 40px;
                }
                .period {
                    align-items: center;
                    display: flex;
                    gap: 5px;
                    .to {
                        display: flex;
                        gap: 5px;
                        &:before {
                            content: '-';
                        }
                    }
                }
            }
        }
        .description {
            margin: 0 20px 0 0;
        }
        .skills {
            margin: 0 20px 1px 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            & > h2 {
                display: none;
            }
            h2 {
                font-size: 1.2em;
                font-weight: 600;
                line-height: 25px;
            }
        }
    }
    & > div.s1 {
        font-size: 1.1rem;
        line-height: 1.6em;
        h2 {
            line-height: 1.1em;
            font-size: 1.7em;
            margin-bottom: 10px;
            font-weight: 600;
        }
        display: flex;
        > div:first-of-type {
            background-color: #414141;
            width: 90mm;
            color: #e4e4e4;

            > .general {
                width: 100%;
                position: relative;
                .photo {
                    > div {
                        aspect-ratio: 1 / 1.3;
                    }
                }
                > .generalText {
                    bottom: 0;
                    width: 100%;
                    background-color: hsla(0, 0%, 0%, 0.8);
                    padding: 20px 30px 25px;
                    text-transform: uppercase;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    .fullName {
                        line-height: 1.1em;
                        font-size: 1.8em;
                        font-weight: 600;
                        color: #f3b736;
                        margin-bottom: 5px;
                    }
                    .profession {
                        line-height: 1.1em;
                        font-size: 1em;
                        text-transform: uppercase;
                        font-style: italic;
                        font-weight: 300;
                    }
                }
            }
            > div:last-of-type {
                padding: 27px 32px;
                display: flex;
                flex-direction: column;
                gap: 50px;
                > div:not(:last-of-type) {
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        bottom: -25px;
                        left: 0;

                        width: 100%;
                        height: 1px;
                        background-color: #f3b736;
                    }
                }
                .contacts {
                    > div {
                        display: flex;
                        flex-direction: column;
                        .phoneNumberContainer,
                        .emailContainer {
                            margin: 6px 0;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            gap: 10px;
                            > svg {
                                display: block;
                                height: 33px;
                                aspect-ratio: 1 / 1;
                            }
                        }
                    }
                }
            }
        }
        > div:last-of-type {
            width: 120mm;
            padding: 27px 32px;
            display: flex;
            flex-direction: column;
            gap: 50px;
            > div:not(:last-of-type) {
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    bottom: -25px;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #414141;
                }
            }
            .skills {
                > div {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    h2 {
                        font-size: 1.1em;
                    }
                }
            }
            .educations {
                > div {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        width: 1px;
                        height: 100%;
                        background-color: #414141;
                    }
                    .education {
                        padding: 0 50px;
                        position: relative;
                        &::before {
                            content: '';
                            position: absolute;
                            z-index: 1;
                            left: -4px;
                            top: calc(50% - 4px);
                            border-radius: 5px;
                            width: 9px;
                            height: 9px;
                            background-color: #414141;
                        }
                        .specialization {
                            font-size: 1.2em;
                            line-height: 1.8em;
                            font-weight: 600;
                        }
                    }
                }
            }
            .workExperience {
                .workPlace {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    .period {
                        display: flex;
                        font-size: 0.9em;
                        font-weight: 600;
                        gap: 3px;
                    }
                    .post {
                        text-transform: uppercase;
                        line-height: 1.3em;
                        font-weight: 600;
                        gap: 3px;
                    }
                    .titleWorkPlace {
                        line-height: 1.3em;
                    }
                    .achievements {
                    }
                }
            }
        }
    }
`;

type Props = {
    refSheet: React.LegacyRef<HTMLDivElement>;
    scale?: number;
    styleName?: string;
    overflowShow?: boolean;
    render?: boolean;
};

const Sheet: FC<Props> = ({ scale, refSheet, styleName, overflowShow, render }) => {
    const dataUpdate = useContext(DataContext);

    return (
        <Container>
            <div
                className={styleName ? styleName : dataUpdate?.data.designOption}
                ref={refSheet}
                style={
                    render
                        ? { zIndex: -100, position: 'absolute', top: '100%' }
                        : {
                              scale: `${scale}%`,
                              overflow: `${overflowShow ? 'inherit' : 'hidden'}`,
                              opacity: `${overflowShow ? '0.3' : '1'}`,
                              position: `${overflowShow ? 'absolute' : 'relative'}`,
                              pointerEvents: `${overflowShow ? 'none' : 'auto'}`,
                              inset: 0,
                          }
                }
            >
                {(styleName === 's' ||
                    styleName === 's0' ||
                    (!styleName && (dataUpdate?.data.designOption == 's' || dataUpdate?.data.designOption === 's0'))) && (
                    <>
                        {(dataUpdate?.data.fullName || dataUpdate?.data.photo || dataUpdate?.data.profession) && (
                            <>
                                <div className="fullName">{dataUpdate?.data.fullName && <Element value={dataUpdate.data.fullName} />}</div>
                                <div className="photo">
                                    {dataUpdate?.data.photo && <Element value={dataUpdate.data.photo.fileUrl} className={'photo'} />}
                                </div>
                                <div className="profession">{dataUpdate?.data.profession && <Element value={dataUpdate.data.profession} />}</div>
                            </>
                        )}
                        {(dataUpdate?.data.phoneNumber || dataUpdate?.data.email) && (
                            <div className="contacts">
                                <h2>Контакты</h2>
                                {dataUpdate?.data.phoneNumber && (
                                    <div className="phoneNumber">
                                        <Element value={dataUpdate.data.phoneNumber} className={'phoneNumber'} />
                                    </div>
                                )}
                                {dataUpdate?.data.email && (
                                    <div className="email">
                                        <Element value={dataUpdate.data.email} className={'email'} />
                                    </div>
                                )}
                            </div>
                        )}
                        {dataUpdate?.data.description && (
                            <div className="description">
                                <h2>О себе</h2>
                                <Element value={dataUpdate.data.description} />
                            </div>
                        )}
                        {(dataUpdate?.data.hardSkills || dataUpdate?.data.softSkills) && (
                            <div className="skills">
                                <h2>Навыки</h2>
                                {dataUpdate?.data.hardSkills && (
                                    <div className="hardSkills">
                                        <h2>Профессиональные навыки</h2>
                                        <Element value={dataUpdate.data.hardSkills} />
                                    </div>
                                )}
                                {dataUpdate?.data.softSkills && (
                                    <div className="softSkills">
                                        <h2>Гибкие навыки</h2>
                                        <Element value={dataUpdate.data.softSkills} />
                                    </div>
                                )}
                            </div>
                        )}
                        {(dataUpdate?.data.educations[0]?.title ||
                            dataUpdate?.data.educations[0]?.specialization ||
                            dataUpdate?.data.educations[0]?.degree ||
                            dataUpdate?.data.workExperience[0]?.title ||
                            dataUpdate?.data.workExperience[0]?.post ||
                            dataUpdate?.data.workExperience[0]?.period?.to ||
                            dataUpdate?.data.workExperience[0]?.period?.from ||
                            dataUpdate?.data.workExperience[0]?.achievements) && (
                            <>
                                <div className="educations">
                                    {(dataUpdate?.data.educations[0]?.title ||
                                        dataUpdate?.data.educations[0]?.specialization ||
                                        dataUpdate?.data.educations[0]?.degree) && (
                                        <>
                                            <h2>Образование</h2>
                                            {dataUpdate?.data.educations.map((education, key) => (
                                                <div key={key} className="education">
                                                    {education.title && (
                                                        <div className="titleEducation">{education.title && <Element value={education.title} />}</div>
                                                    )}
                                                    {education.specialization && (
                                                        <div className="specialization">
                                                            {education.specialization && <Element value={education.specialization} />}
                                                        </div>
                                                    )}
                                                    {education.degree && (
                                                        <div className="degree">{education.degree && <Element value={education.degree} />}</div>
                                                    )}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                                <div className="workExperience">
                                    {(dataUpdate?.data.workExperience[0]?.title ||
                                        dataUpdate?.data.workExperience[0]?.post ||
                                        dataUpdate?.data.workExperience[0]?.period?.to ||
                                        dataUpdate?.data.workExperience[0]?.period?.from ||
                                        dataUpdate?.data.workExperience[0]?.achievements) && (
                                        <>
                                            <h2>Опыт работы</h2>
                                            {dataUpdate?.data.workExperience.map((workPlace, key) => (
                                                <div key={key} className="workPlace">
                                                    {workPlace.title && (
                                                        <div className="titleWorkPlace">
                                                            <Element value={workPlace.title} className={'titleWorkPlace'} />
                                                        </div>
                                                    )}
                                                    {workPlace.post && (
                                                        <div className="post">
                                                            <Element value={workPlace.post} className={'post'} />
                                                        </div>
                                                    )}
                                                    {workPlace?.period && (
                                                        <div className="period">
                                                            {workPlace.period.from && (
                                                                <div className="from">
                                                                    <Element value={workPlace.period.from} className={'from'} />
                                                                </div>
                                                            )}
                                                            {workPlace.period.to && (
                                                                <div className="to">
                                                                    <Element value={workPlace.period.to} className={'to'} />
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                    {workPlace?.achievements && (
                                                        <div className="achievements">
                                                            <h2>Достижения</h2>
                                                            {workPlace.achievements && (
                                                                <Element value={workPlace.achievements} className={'achievements'} />
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </>
                )}
                {(styleName === 's1' || (!styleName && dataUpdate?.data.designOption === 's1')) && (
                    <>
                        <div>
                            {(dataUpdate?.data.fullName || dataUpdate?.data.profession || dataUpdate?.data.photo) && (
                                <div className="general">
                                    {dataUpdate?.data.photo && <Element2 value={dataUpdate.data.photo.fileUrl} className={'photo'} />}
                                    {(dataUpdate?.data.fullName || dataUpdate?.data.profession) && (
                                        <div className="generalText" style={{ position: dataUpdate?.data.photo ? 'absolute' : 'inherit' }}>
                                            {dataUpdate?.data.fullName && <Element2 value={dataUpdate.data.fullName} className={'fullName'} />}
                                            {dataUpdate?.data.profession && <Element2 value={dataUpdate.data.profession} className={'profession'} />}
                                        </div>
                                    )}
                                </div>
                            )}
                            <div>
                                {dataUpdate?.data.description && (
                                    <div className="descriptionContainer">
                                        <h2>О себе</h2>
                                        <Element2 value={dataUpdate.data.description} className={'description'} />
                                    </div>
                                )}
                                {(dataUpdate?.data.phoneNumber || dataUpdate?.data.email) && (
                                    <div className="contacts">
                                        <h2>Контакты</h2>
                                        <div>
                                            {dataUpdate?.data.phoneNumber && (
                                                <div className="phoneNumberContainer">
                                                    <EmailIcon color="#f3b736" fill="white" />
                                                    <Element2 value={dataUpdate.data.phoneNumber} className={'phoneNumber'} />
                                                </div>
                                            )}
                                            {dataUpdate?.data.email && (
                                                <div className="emailContainer">
                                                    <PhoneIcon color="#f3b736" fill="white" />
                                                    <Element2 value={dataUpdate.data.email} className={'email'} />
                                                </div>
                                            )}{' '}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            {(dataUpdate?.data.educations[0]?.title ||
                                dataUpdate?.data.educations[0]?.specialization ||
                                dataUpdate?.data.educations[0]?.degree) && (
                                <div className="educations">
                                    <h2>Образование</h2>
                                    <div>
                                        {dataUpdate?.data.educations.map((education, key) => (
                                            <div key={key} className="education">
                                                {education.specialization && education.specialization && (
                                                    <Element2 value={education.specialization} className={'specialization'} />
                                                )}
                                                {education.title && education.title && (
                                                    <Element2 value={education.title} className={'titleEducation'} />
                                                )}
                                                {education.degree && education.degree && <Element2 value={education.degree} className={'degree'} />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {(dataUpdate?.data.hardSkills || dataUpdate?.data.softSkills) && (
                                <div className="skills">
                                    <h2>Навыки</h2>
                                    <div>
                                        {dataUpdate?.data.hardSkills && (
                                            <div className="hardSkillsContainer">
                                                <h2>Профессиональные:</h2>
                                                <Element2 value={dataUpdate.data.hardSkills} className={'hardSkills'} />
                                            </div>
                                        )}
                                        {dataUpdate?.data.softSkills && (
                                            <div className="softSkillsContainer">
                                                <h2>Гибкие:</h2>
                                                <Element2 value={dataUpdate.data.softSkills} className={'softSkills'} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {(dataUpdate?.data.workExperience[0]?.title ||
                                dataUpdate?.data.workExperience[0]?.post ||
                                dataUpdate?.data.workExperience[0]?.period.from ||
                                dataUpdate?.data.workExperience[0]?.period.to ||
                                dataUpdate?.data.workExperience[0]?.achievements) && (
                                <div className="workExperience">
                                    <h2>Опыт работы</h2>
                                    <div>
                                        {dataUpdate?.data.workExperience.map((workPlace, key) => (
                                            <div key={key} className="workPlace">
                                                {(workPlace.period.from || workPlace.period.to) && (
                                                    <div className="period">
                                                        {workPlace.period.from && <Element2 value={workPlace.period.from} className={'from'} />}
                                                        {workPlace.period.from && workPlace.period.to && <div>-</div>}
                                                        {workPlace.period.to && <Element2 value={workPlace.period.to} className={'to'} />}
                                                    </div>
                                                )}
                                                <div>
                                                    {workPlace.post && <Element2 value={workPlace.post} className={'post'} />}
                                                    {workPlace.title && <Element2 value={workPlace.title} className={'titleWorkPlace'} />}
                                                </div>
                                                {workPlace.achievements && <Element2 value={workPlace.achievements} className={'achievements'} />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
};
export default Sheet;
