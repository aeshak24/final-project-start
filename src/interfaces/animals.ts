/*
export type animalType =
    | "fish"
    | "dolphin"
    | "turtle"
    | "jellyfish"
    | "starfish"
    | "seaweed";
*/
export interface turtle {
    id: string;
    name: "turtle";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}

export interface dolphin {
    id: string;
    name: "dolphin";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface fish {
    id: string;
    name: "fish";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface starfish {
    id: string;
    name: "starfish";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface jellyfish {
    id: string;
    name: "jellyfish";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface mermaid {
    id: string;
    name: "mermaid";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface whale {
    id: string;
    name: "whale";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface shark {
    id: string;
    name: "shark";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface crab {
    id: string;
    name: "crab";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export interface octopus {
    id: string;
    name: "octopus";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: string;
}
export type Animal =
    | turtle
    | dolphin
    | jellyfish
    | starfish
    | fish
    | mermaid
    | whale
    | shark
    | crab
    | octopus;
