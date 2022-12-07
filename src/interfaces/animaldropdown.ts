export type animalType =
    | "fish"
    | "dolphin"
    | "turtle"
    | "starfish"
    | "jellyfish"
    | "seaweed";

export interface Animals {
    type: animalType;
    size: string;
    color: string;
    age: number[];
    hungry: boolean;
    gills: boolean;
}
