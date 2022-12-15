import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeJellyfish } from "./animalattributes";

export function JellyfishAttributeDropDown({
    attributes
}: {
    attributes: string[];
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(attributes[0]);

    function updateSelectedChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    function trueOrFalseHungry() {
        if (makeJellyfish().hungry == true) {
            return "true";
        } else {
            return "false";
        }
    }
    function trueOrFalseGills() {
        if (makeJellyfish().gills == true) {
            return "true";
        } else {
            return "false";
        }
    }

    return (
        <div>
            <h3>Jellyfish Attributes</h3>
            <Form.Group>
                <Form.Label>Fish options</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    <option value="Type">Type: {makeJellyfish().type}</option>
                    <option value="Size">Size: {makeJellyfish().size}</option>
                    <option value="Color">
                        Color: {makeJellyfish().color}
                    </option>
                    <option value="Age">
                        Age: {makeJellyfish().age[0]}, {makeJellyfish().age[1]},
                        {makeJellyfish().age[2]}
                    </option>
                    <option value="Hungry">
                        Hungry: {trueOrFalseHungry()}
                    </option>
                    <option value="Gills">Gills: {trueOrFalseGills()}</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
