/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeTurtle } from "./animalattributes";

export function TurtleAttributeDropDown({
    attributes
}: {
    attributes: string[];
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(attributes[0]);

    function updateSelectedChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    function trueOrFalseHungry() {
        if (makeTurtle().hungry == true) {
            return "true";
        } else {
            return "false";
        }
    }
    function trueOrFalseGills() {
        if (makeTurtle().gills == true) {
            return "true";
        } else {
            return "false";
        }
    }

    return (
        <div>
            <h3>Turtle Attributes</h3>
            <Form.Group>
                <Form.Label>Turtle options</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    <option value="Type">Type: {makeTurtle().type}</option>
                    <option value="Size">Size: {makeTurtle().size}</option>
                    <option value="Color">Color: {makeTurtle().color}</option>
                    <option value="Age">
                        Age: {makeTurtle().age[0]}, {makeTurtle().age[1]},
                        {makeTurtle().age[2]}
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
