export type animalType = "fish" | "dolphin" | "turtle";

export interface Animal {
    size: string;
    type: animalType;
    color: string;
    age: number[];
    hungry: boolean;
    gills: boolean;
}
