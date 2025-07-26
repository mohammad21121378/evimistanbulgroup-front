export type DataType = {
    title: string;
    list: string[];
    sidebar?: {
        guideLinks?: { label: string; link: string }[];
        servicesLinks?: { label: string; link: string }[];
        counseling?: {};
        search?: {};
        medicalImg?: {}
    };
};