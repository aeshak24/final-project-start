import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function AnimalDropDown({
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
            <h3>Animals</h3>
            <Form.Group>
                <Form.Label>Animal Options</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    <option value="turtle"> Turtle </option>
                    <option value="Dolphin"> Dolphin </option>
                    <option value="Fish"> Fish </option>
                    <option value="Jellyfish"> Jellyfish </option>
                    <option value="Starfish"> Starfish </option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
