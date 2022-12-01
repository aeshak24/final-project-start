import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeStarfish } from "./animalattributes";

export function StarfishAttributeDropDown({
    attributes
}: {
    attributes: string[];
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(attributes[0]);

    function updateSelectedChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    function trueOrFalseHungry() {
        if (makeStarfish().hungry == true) {
            return "true";
        } else {
            return "false";
        }
    }
    function trueOrFalseGills() {
        if (makeStarfish().gills == true) {
            return "true";
        } else {
            return "false";
        }
    }

    return (
        <div>
            <h3>Fish Attributes</h3>
            <Form.Group>
                <Form.Label>Fish options</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    <option value="Type">Type: {makeStarfish().type}</option>
                    <option value="Size">Size: {makeStarfish().size}</option>
                    <option value="Color">Color: {makeStarfish().color}</option>
                    <option value="Age">
                        Age: {makeStarfish().age[0]}, {makeStarfish().age[1]},
                        {makeStarfish().age[2]}
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
