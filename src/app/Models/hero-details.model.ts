
export interface HeroDetailsModel{

    id: number;
    name: string;
    slug?: string;
    appearance: {
        eyeColor: string;
        gender: string;
        hairColor: string;
        height?: [];
        race: string;
        weight?: [];
    };
    biography: {
        aliases?: [];
        alignment: string;
        alterEgos: string;
        firstAppearance: string;
        fullName: string;
        placeOfBirth: string;
        publisher: string;
    };
    connections: {
        groupAffiliation: string;
        relatives: string;
    };
    images: {
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
    powerstats: {
        combat: number;
        durability: number;
        intelligence: number;
        power: number;
        speed: number;
        strength: number;
    };
    work: {
        base?: string;
        occupation: string;
    };
}