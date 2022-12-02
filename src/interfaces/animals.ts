export type animalType = "fish" | "dolphin" | "turtle";

export interface turtle {
    id: string;
    name: "turtle";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface dolphin {
    id: string;
    name: "dolphin";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}
export type Animal = turtle | dolphin;
