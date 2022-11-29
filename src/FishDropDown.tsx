import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeFish } from "./animalattributes";

export function FishAttributeDropDown({
    attributes
}: {
    attributes: string[];
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(attributes[0]);

    function updateSelectedChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    function trueOrFalseHungry() {
        if (makeFish().hungry == true) {
            return "true";
        } else {
            return "false";
        }
    }
    function trueOrFalseGills() {
        if (makeFish().gills == true) {
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
                    <option value="Type">Type: {makeFish().type}</option>
                    <option value="Size">Size: {makeFish().size}</option>
                    <option value="Color">Color: {makeFish().color}</option>
                    <option value="Age">
                        Age: {makeFish().age[0]}, {makeFish().age[1]},
                        {makeFish().age[2]}
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
