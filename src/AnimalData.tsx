import type { turtle, dolphin } from "./interfaces/animals";
import TurtleImage from "./assets/turtle.jpg";
import DolphinImage from "./assets/dolphin.jpg";

const Turtle: turtle = {
    id: "sea-turtle",
    name: "turtle",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "green",
    image: TurtleImage
};

const Dolphin: dolphin = {
    id: "sea-dolphin",
    name: "dolphin",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "blue",
    image: DolphinImage
};

export const animalsreal = [Turtle, Dolphin];
