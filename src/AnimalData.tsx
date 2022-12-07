import type {
    turtle,
    dolphin,
    fish,
    starfish,
    jellyfish
} from "./interfaces/animals";
import TurtleImage from "./assets/turtle.jpg";
import DolphinImage from "./assets/dolphin.jpg";
import FishImage from "./assets/fish.jpg";
import StarfishImage from "./assets/starfish.jpeg";
import JellyfishImage from "./assets/jellyfish.jpeg";

const Turtle: turtle = {
    id: "sea-turtle",
    name: "turtle",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "blue",
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

const Fish: fish = {
    id: "sea-fish",
    name: "fish",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "blue",
    image: FishImage
};
const Starfish: starfish = {
    id: "sea-starfish",
    name: "starfish",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "blue",
    image: StarfishImage
};
const Jellyfish: jellyfish = {
    id: "sea-jellyfish",
    name: "jellyfish",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "blue",
    image: JellyfishImage
};

export const animalsreal = [Turtle, Dolphin, Fish, Starfish, Jellyfish];
