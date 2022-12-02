import { Animals } from "./interfaces/animaldropdown";

export function makeTurtle(): Animals {
    return {
        type: "turtle",
        size: "medium",
        color: "green",
        age: [25, 45, 65],
        hungry: true,
        gills: false
    };
}

export function makeFish(): Animals {
    return {
        type: "fish",
        size: "small",
        color: "orange",
        age: [5, 10, 15],
        hungry: true,
        gills: true
    };
}

export function makeDolphin(): Animals {
    return {
        type: "dolphin",
        size: "large",
        color: "blue",
        age: [40, 60, 70],
        hungry: false,
        gills: false
    };
}

export function makeJellyfish(): Animal {
    return {
        type: "jellyfish",
        size: "large",
        color: "blue",
        age: [40, 60, 70],
        hungry: false,
        gills: false
    };
}

export function makeStarfish(): Animal {
    return {
        type: "starfish",
        size: "large",
        color: "blue",
        age: [40, 60, 70],
        hungry: false,
        gills: false
    };
}
