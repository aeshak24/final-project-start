import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeDolphin } from "./animalattributes";

export function DolphinAttributeDropDown({
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
            <h3>Dolphin Attributes</h3>
            <Form.Group>
                <Form.Label>Dolphin options</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    <option value="Type">Type: {makeDolphin().type}</option>
                    <option value="Size">Size: {makeDolphin().size}</option>
                    <option value="Color">Color: {makeDolphin().color}</option>
                    <option value="Age">
                        Age: {makeDolphin().age[0]}, {makeDolphin().age[1]},
                        {makeDolphin().age[2]}
                    </option>
                    <option value="Hungry">
                        Hungry: {makeDolphin().hungry}
                    </option>
                    <option value="Gills">Gills: {makeDolphin().gills}</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
