export type animalType = "fish" | "dolphin" | "turtle";

export interface Animal {
    size: number;
    type: animalType;
    color: string;
    age: number;
    hungry: boolean;
    gills: boolean;
}
