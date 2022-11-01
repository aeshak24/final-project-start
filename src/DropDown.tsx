/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

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
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {expectedAnswer === selectedChoice
                    ? "changing your animal"
                    : "not changing animal "}{" "}
            </div>
        </div>
    );
}
