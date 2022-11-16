/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeDolphin, makeTurtle } from "./animalattributes";

export function AttributeDropDown({
    attributes
}: {
    attributes: string[];
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(attributes[0]);

    function updateSelectedChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <h3>Animal Attributes</h3>
            <Form.Group>
                <Form.Label>Answer List</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    <option value="Type">Type</option>
                    <option value="Size">Size</option>
                    <option value="Color">Color</option>
                    <option value="Age">Age</option>
                    <option value="Hungry">Hungry</option>
                    <option value="Gills">Gills</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
