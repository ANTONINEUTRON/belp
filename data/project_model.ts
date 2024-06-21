interface ProfileType {
    id: string;
    name: string;
    definition: string;
}

interface ProfileSector {
    id: string;
    name: string;
    definition: string;
}

interface ProfileStatus {
    id: string;
    name: string;
    definition: string;
}

interface Assets {
    numberOfRecords: number;
    linkToFetch: string;
}

interface Socials {
    numberOfRecords: number;
    linkToFetch: string;
}

interface Entities {
    numberOfRecords: number;
    linkToFetch: string;
}

interface Products {
    numberOfRecords: number;
    linkToFetch: string;
}

interface Profile {
    id: string;
    name: string;
    foundingDate: string;
    logo: string;
    descriptionShort: string;
    descriptionLong: string;
    urlMain: string;
    urlBlog: string;
    urlDocumentation: string;
    urlWhitepaper: string;
    profileType: ProfileType;
    profileSector: ProfileSector;
    profileStatus: ProfileStatus;
    assets: Assets;
    socials: Socials;
    entities: Entities;
    products: Products;
}

interface Project {
    id: string;
    profile: Profile;
}

export default Project;