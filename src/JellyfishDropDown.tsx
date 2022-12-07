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
    /*
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
*/
    return (
        <div>
            <h3>Animals</h3>
            <Form.Group>
                <Form.Label>Animal Options</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    <option value="Turtle"></option>
                    <option value="Dolphin"></option>{" "}
                    <option value="Fish"></option>{" "}
                    <option value="Jellyfish"></option>{" "}
                    <option value="Starfish"></option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
