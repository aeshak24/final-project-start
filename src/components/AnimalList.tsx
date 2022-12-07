/* eslint-disable no-extra-parens */
import React from "react";
import AnimalItem from "./Animalitems";
import type { Animal } from "../interfaces/animals";
import { animalsreal } from "../AnimalData";

// import "./styles.css";

const AnimalList = () => {
    return (
        <div id="animal-list">
            {animalsreal.map((f: Animal) => (
                <div key={f.name}>
                    <p className="animal-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
                    <AnimalItem item={f} />
                </div>
            ))}
        </div>
    );
};

export default AnimalList;
