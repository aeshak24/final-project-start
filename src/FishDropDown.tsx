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
                    <option value="Hungry">Hungry: {makeFish().hungry}</option>
                    <option value="Gills">Gills: {makeFish().gills}</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
