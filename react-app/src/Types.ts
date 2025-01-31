export type Education = {
    title?: string;
    specialization?: string;
    degree?: string;
};
export type Period = {
    from?: string;
    to?: string;
};
export type WorkPlace = {
    title?: string;
    post?: string;
    period: Period;
    achievements?: string;
};
export type Photo = {
    fileName: string;
    fileUrl: string;
};
export type Data = {
    fullName?: string;
    photo?: Photo;
    profession?: string;
    description?: string;
    phoneNumber?: string;
    email?: string;
    hardSkills?: string;
    softSkills?: string;
    educations: Education[];
    workExperience: WorkPlace[];
    designOption: string;
};
export type Position = {
    x: number;
    y: number;
};
