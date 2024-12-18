export type Education = {
    title?: string;
    specialization?: string;
    degree?: string;
};
export type WorkPlace = {
    title?: string;
    post?: string;
    period?: string;
    achievements?: string;
};
export type Data = {
    fullName?: string;
    profession?: string;
    description?: string;
    phoneNumber?: string;
    email?: string;
    hardSkills?: string;
    softSkills?: string;
    educations: Education[];
    workExperience: WorkPlace[];
};
export type Position = {
    x: number;
    y: number;
};
