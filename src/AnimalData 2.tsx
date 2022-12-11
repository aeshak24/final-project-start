import type { turtle, dolphin } from "./interfaces/animals";

const Turtle: turtle = {
    id: "sea-turtle",
    name: "turtle",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "green"
};

const Dolphin: dolphin = {
    id: "sea-dolphin",
    name: "dolphin",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "blue"
};

export const animalsreal = [Turtle, Dolphin];
