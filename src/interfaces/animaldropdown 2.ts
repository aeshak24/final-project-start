export type animalType =
    | "fish"
    | "dolphin"
    | "turtle"
    | "starfish"
    | "jellyfish";

export interface Animals {
    type: animalType;
    size: string;
    color: string;
    age: number[];
    hungry: boolean;
    gills: boolean;
}
